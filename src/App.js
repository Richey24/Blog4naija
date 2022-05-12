import './App.css';
import Header from './Header'
import Main from './Main';
import { Table, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {


  let [{ token, role }] = useCookies()
  let [employee, setEmploy] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('https://test-jwt-employee.herokuapp.com/api/employee/get/all', {
        headers: {
          Authorization: 'Bearer ' + token
        },
      })
      let response = await res.data
      setEmploy(response)
    }
    fetchData()
  }, [token, employee])



  const updateUser = async (id, fName, lName, address, email, age) => {
    navigate(`/update`, {
      state: {
        id,
        fName,
        lName,
        address,
        email,
        age
      }
    })
  }

  async function deleteUser(id) {
    console.log(id);
    await axios.delete(`https://test-jwt-employee.herokuapp.com/api/employee/delete/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  return (
    <div className="App">
      <Header />
      <Main />
      {
        token ? (
          <>
            {
              role === 'ADMIN' ? (
                <>
                  <Container>
                    <Link to={`/registeremploy`}>
                      <Button>
                        Register Employee
                      </Button>
                    </Link>
                  </Container>
                </>
              ) : null
            }
            <br />
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Age</th>

                  {role === 'ADMIN' ? (<><th>Update</th>
                    <th>Delete</th></>) : null}
                </tr>
              </thead>
              <tbody>

                {
                  employee.map((single, i) => {
                    return (
                      <tr key={single.id}>
                        <td>{i + 1}</td>
                        <td>{single.firstName}</td>
                        <td>{single.lastName}</td>
                        <td>{single.address}</td>
                        <td>{single.email}</td>
                        <td>{single.age}</td>
                        {role === 'ADMIN' ? (<><td><Button onClick={() => updateUser(single.id, single.firstName, single.lastName, single.address, single.email, single.age)}>Update</Button></td>
                          <td><Button variant='danger' onClick={() => deleteUser(single.id)}>Delete</Button></td></>) : null}
                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>
          </>
        ) : ""
      }
    </div>
  );
}

export default App;
