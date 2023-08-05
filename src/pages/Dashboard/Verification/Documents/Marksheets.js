
import React from 'react';
import ImageUploader from '../../../../components/FileUploader/FileUpload';


const MarkSheetsUploader = () => {
  return (
    <div className="w-75 h-100 p-4 card">
      <h5>MarkSheets</h5>
      <ImageUploader key="markSheetsUploader" type="MarkSheets" title="Select MarkSheets" />
    </div>
  );
};

export default MarkSheetsUploader;
