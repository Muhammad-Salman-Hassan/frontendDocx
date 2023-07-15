import React, { useState } from 'react';
import './FileUpload.css';
import { useDispatch } from 'react-redux';
import { UploadMultipleFile } from '../uploadfile/UploadSlice';

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

  console.log(images);

  const onUpload = () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('files', image.file);
      
    });
    formData.append('image_type', props.type);
    dispatch(UploadMultipleFile(formData));
  };

  return (
    <div className="card">
      <div className="d-flex justify-content-between w-100">
        <label htmlFor="upload-input" className="upload-label">
          <span>{props.title}</span>
          <input type="file" multiple onChange={handleFileChange} id="upload-input" className="upload-input" />
        </label>
        <button className="upload-label" onClick={onUpload}>
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
