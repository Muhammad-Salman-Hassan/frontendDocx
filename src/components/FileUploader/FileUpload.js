import React, { useEffect, useState } from 'react';
import './FileUpload.css';
import { useDispatch } from 'react-redux';
import { UploadMultipleFile, setFiles } from '../uploadfile/UploadSlice';
import { toast } from 'react-toastify';

const ImageUploader = (props) => {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const selectedImages = Array.from(fileList).map((file) => {
      return {
        file: file,
        
      };
    });
    setImages(selectedImages);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  useEffect(() => {
   dispatch(setFiles(images))
  }, [images])
  

  console.log(images);

  const onUpload = () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('files', image.file);
      
    });
    formData.append('image_type', props.type);
    dispatch(UploadMultipleFile(formData));
    // toast("Wow so easy !");
  };

  return (
    <div className="card p-5">
      <div className="d-flex justify-content-between w-100">
        <label htmlFor="upload-input" className="upload-label">
          <span>{props.title}</span>
          <input type="file" multiple onChange={handleFileChange} id="upload-input" className="upload-input" />
        </label>
        <button className="upload-label" onClick={onUpload} disabled={images.length<=0}>
          Upload
        </button>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={URL.createObjectURL(image.file)} alt={`Image ${index}`} className="uploaded-image" />
            <button onClick={() => handleRemoveImage(index)} className="cancel-button">
              Cancel
            </button>
          </div>
        ))}
      </div>
      {images.length === 0 && <p className="no-images-text">No images selected.</p>}
    </div>
  );
};

export default ImageUploader;
