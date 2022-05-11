import './App.css';
import Header from './Header'
import Main from './Main';
import { Table, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';
import axios from 'axios';



function App() {


  let [{ token, role }] = useCookies()

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('https://test-jwt-employee.herokuapp.com/api/employee/welcome', {
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      let response = await res.json()
    }
    fetchData()
  }, [token])

  let navigate = useNavigate()

  const updateUser = () => {
    navigate(`/update:id`)
  }

  const deleteUser = () => {

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
                  <th>Role</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><Button disabled={role === 'ADMIN' ? false : true} onClick={updateUser}>Update</Button></td>
                  <td><Button disabled={role === 'ADMIN' ? false : true} variant='danger' onClick={deleteUser}>Delete</Button></td>
                </tr>
              </tbody>
            </Table>
          </>
        ) : ""
      }
    </div>
  );
}

export default App;
