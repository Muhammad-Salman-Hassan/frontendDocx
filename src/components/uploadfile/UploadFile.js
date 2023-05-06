import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFiles } from './UploadSlice';

export function FileInputs() {

  const [imageFiles, setImageFiles] = useState({
    file1: "",
    file2: "",
    file3: "",
  });
  
const dispatch=useDispatch()
  const handleFileChange = (event) => {
    const target = event.target;
    const name = target.name;
    const file = target.files[0];

    setImageFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));
  };
//   console.log(url)

  useEffect(() => {
  
  dispatch(setFiles(imageFiles))
  }, [imageFiles,dispatch])
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the image files, e.g. upload to a server
    console.log(imageFiles);
  };
  console.log(imageFiles);
  return (
    <div className="d-flex  justify-content-between align-items-center w-100">
      <div >
        <label htmlFor="file1">File 1:</label>
        <input
          type="file"
          id="file1"
          name="file1"
          accept="image/*"
          onChange={handleFileChange}
        
        />
        {imageFiles.file1 && (
          <img
          width="80px"
          height="80px"
            src={URL.createObjectURL(imageFiles.file1)}
            alt="File 1 Preview"
          />
        )}
      </div>
      <div>
        <label htmlFor="file2">File 2:</label>
        <input
          type="file"
          id="file2"
          name="file2"
          accept="image/*"
          
          onChange={handleFileChange}
        />
        {imageFiles.file2 && (
          <img
          width="80px"
          height="80px"
            src={URL.createObjectURL(imageFiles.file2)}
            alt="File 2 Preview"
          />
        )}
      </div>
      <div>
        <label htmlFor="file3">File 3:</label>
        <input
          type="file"
          id="file3"
          name="file3"
          accept="image/*"
          onChange={handleFileChange}
        />
        {imageFiles.file3 && (
          <img
          width="80px"
          height="80px"
            src={URL.createObjectURL(imageFiles.file3)}
            alt="File 3 Preview"
          />
        )}
      </div>
      
    </div>
  );
}
