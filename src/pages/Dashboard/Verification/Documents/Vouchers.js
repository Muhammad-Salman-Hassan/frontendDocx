// VouchersUploader.js
import React from 'react';
import ImageUploader from '../../../../components/FileUploader/FileUpload';


const VouchersUploader = () => {
  return (
    <div className="w-75 p-4 card">
      <h5>Vouchers</h5>
      <ImageUploader type="Vouchers" title="Select Vouchers" />
    </div>
  );
};

export default VouchersUploader;
