import './App.css'
import { useState } from 'react';
import EmployeeCard from './Component/EmployeeCard';

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmploye = () => {
    fetch("http://localhost:3001/api/employees")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setEmployee(data.results[0]);
    });  
  };
  return (
    <>
      <div>
      <EmployeeCard employee={employee} />
      <button type='button' onClick={getEmploye}>Get Employe</button>
      </div>
    </>
  )
}

export default App
