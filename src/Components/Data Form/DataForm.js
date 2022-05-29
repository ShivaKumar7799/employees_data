import React, { useContext } from 'react'
import { AppContext } from '../../App';
import './DataForm.css'

function DataForm() {
  const dataFormObject = useContext(AppContext);
  const {employeeData,setEmployeeData, addFormData, setAddFormData} = dataFormObject
   
  const changeHandler = (event) => {
        const name = event.target.getAttribute("name");
        const value = event.target.value;

        const newData = { ...addFormData};
        newData[name] = value;

        setAddFormData(newData);
  }

  const formSubmitHandler = (event) => {
       event.preventDefault();
        const newDetails = {
          firstName : addFormData.firstName,
          username : addFormData.username,
          dob : addFormData.dob,
          phoneNumber : addFormData.phoneNumber,
          email : addFormData.email,
          country : addFormData.country,
          state : addFormData.state,
          city : addFormData.city
        };

        const updateDetails = [...employeeData, newDetails];
        console.log(updateDetails)
        setEmployeeData(updateDetails);
        
        setAddFormData({
          firstName : "",
          username : "",
          dob : "",
          phoneNumber : "",
          email : "",
          country : "",
          state : "",
          city : ""
        })
  }
  return (
    <div className='dataFormContainer'>
        <div className='inputFieldContainer' >
          <h2> Add Employee's data</h2>
              <form onSubmit={formSubmitHandler} >
                <div className='inputFields' >
                  <label htmlFor="firstName" >FirstName :</label>
                  <input  type="text" id='firstName' name="firstName" placeholder="Enter firstname" onChange={changeHandler} value={addFormData.firstName} required />
                </div>
                <div  className='inputFields'>
                  <label htmlFor="username" > Username :</label>
                  <input type="username" id='username' name = "username" placeholder = "Enter UserName" onChange={changeHandler} value={addFormData.username} required />
                </div>
                <div  className='inputFields' >
                  <label htmlFor="dob" > Date of Birth :</label>
                  <input type="date" id='dob' name="dob" onChange={changeHandler} value={addFormData.dob} required  />
                </div>
                <div className='inputFields' >
                  <label htmlFor="phoneNumber" > Phone Number :</label>
                  <input type="tel" id='phoneNumber' name = "phoneNumber"  placeholder = "Enter Phone Number" onChange={changeHandler} value={addFormData.phoneNumber} required />
                </div>
                <div className='inputFields' >
                  <label htmlFor="email" >Email :</label>
                  <input type= "email" id='email' name = "email" placeholder = "Enter email" onChange={changeHandler} value={addFormData.email} required />
                </div>
                <div className='inputFields' >
                  <label htmlFor="country" >Country :</label>
                  <input type="text" id='country' name = "country" placeholder = "Enter Country Name" onChange={changeHandler} value={addFormData.country} required />
                </div>
                <div className='inputFields' >
                <label htmlFor="state" > State :</label>
                <input type= "text" id='state' name = "state" placeholder = " Enter State name" onChange={changeHandler} value={addFormData.state} required />
                </div>
                <div className='inputFields' >
                  <label htmlFor="city" >City :</label>
                  <input type= "city" id='city' name = "city" placeholder = "Enter City name" onChange={changeHandler} value={addFormData.city} required />
                </div>
                <div  className='buttonField'>  
                    <button type="submit" > Add Employee </button>
                </div>
              </form>
        </div>

        <div>
            <h2> Added Employes's Details </h2>
            <table className='table' >
            <thead>
              <tr>
                <th>S.No</th>
                <th>FirstName</th>
                <th>Username</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
            {employeeData.length > 0 ? employeeData.map((item, index) => {
            return(
              <tr key={index} >
                  <td data-label = "S.No" > {index + 1 }</td>
                  <td data-label = "firstName" >{item.firstName}</td> 
                  <td data-label='username' > {item.username}</td>
                  <td data-label= "dob" >{item.dob}</td>
                  <td data-label ="phoneNumber" >{item.phoneNumber}</td>
                  <td data-label = "email" >{item.email}</td>
                  <td data-label = "country" >{item.country}</td>
                  <td data-label = "state" > {item.state}</td>
                  <td data-label = "city" >{item.city}</td>
              </tr>
            )
          }) : <tr><td className='noData' colSpan={9} > No Data Found, Please add Employees data </td></tr> }  
            </tbody>  
          </table > 
        </div>
    </div>
  )
}

export default DataForm
