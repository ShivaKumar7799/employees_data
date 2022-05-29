import { createContext, useState } from 'react';
import './App.css';
import DataForm from './Components/Data Form/DataForm';
import TableComponent from './Components/TableComponent/TableComponent';

export const AppContext = createContext(null)

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [addFormData,setAddFormData] = useState({
      firstName : "",
      username : "",
      dob : "",
      phoneNumber : "",
      email : "",
      country : "",
      state : "",
      city : ""
  })

  const dataFormObject = {
    employeeData : employeeData,
    setEmployeeData : setEmployeeData,
    addFormData : addFormData,
    setAddFormData: setAddFormData
  }

  return (
    <AppContext.Provider value = {dataFormObject}>
        <TableComponent />
        <DataForm />
    </AppContext.Provider>
  );
}

export default App;
