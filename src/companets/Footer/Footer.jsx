import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState([])
  const [drop, setDrop] = useState()



  const GetAllData = () => {
    axios.get("http://localhost:3004/data")
      .then((data) => {
        setData(data.data)
      })
  }


  const DeleteData = (id) => {
    axios.delete(`http://localhost:3004/data/${id}`)
      .then((res) => {
        alert(res.status)
      })
  }

  useEffect(() => {
    GetAllData()
  }, [])


  const edite_func = (id) => {
    axios.edikkjte(`http://localhost:3004/data/${id}`)
      .then((res) => {
        alert(res.statusText)
      })
  }

  // const drap_Down = (id) => {
  //   axios.get(`http://localhost:3004/data/${id}`)
  //     .then((res) => {
  //     })
  // }
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={3}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                son
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {data?.map((index) => {
                  return (
                    <>
                      <Dropdown.Item>{index.id}</Dropdown.Item>
                    </>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>

          </Col>
        </Row>
        <Row className='justify-content-center mt-5' >
          <Col xs={8}>
            <Table striped bordered hover>
              <thead>
              </thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Age</th>
              </tr>
              <tbody>
                {data?.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <img style={{ width: "100px", height: "80px" }} src={data.img} alt="" />
                        <button onClick={() => DeleteData(data.id)}>Delete</button>
                        <Link to={`/table/editetable/${data.id}`}>
                          <button className='editbtn ' onClick={() => edite_func(data.id)}>Edite</button>
                        </Link>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Footer
