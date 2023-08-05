import React, { useState } from 'react';

const AdminForm = () => {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    cnic:'',
    password:'',
    role: 'admin', // Default role is set to "admin"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission and save the admin data to your backend or state management system
    console.log(adminData);
  };

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",flexDirection:"column"}}>
        <h1>Create Admin</h1>
    <form onSubmit={handleSubmit}className='card' style={{padding:"20px",width:"80%"}}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={adminData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={adminData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="email">Cnic</label>
            <input
              type="cnicn"
              className="form-control"
              id="cnic"
              name="cnic"
              value={adminData.cnic}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={adminData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={adminData.role}
              onChange={handleInputChange}
            >
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="editor">Editor</option>
              {/* Add more role options as needed */}
            </select>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Add Admin</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default AdminForm;
