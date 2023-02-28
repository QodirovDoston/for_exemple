import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState([])
  const [drop, setDrop] = useState(1)


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

  const edite_func = (id) => {
    axios.get(`http://localhost:3004/data/${id}`)
    .then((res) => {
      alert(res.statusText)
    })
  }
  useEffect(() => {
    GetAllData()
  }, [])
  
  const handleSelect = (e) => {
    setDrop(e)
  }
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={3}>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                son
              </Dropdown.Toggle>
              <Dropdown.Menu >
                {data?.map((index, ind) => {
                  return (
                    <Dropdown.Item eventKey={index.id} key={ind}>
                      {index.id}
                    </Dropdown.Item>
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
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Age</th>
              </tr>
              </thead>
              <tbody>
                {data?.map((datas) => {
                  if (datas.id <= drop)
                    return (
                      <tr key={datas.id}>
                        <td>{datas.id}</td>
                        <td>{datas.name}</td>
                        <td>{datas.age}</td>
                        <img style={{ width: "100px", height: "80px" }} src={datas.img} alt="" />
                        <td>

                        <button onClick={() => DeleteData(datas.id)}>Delete</button>
                        <Link to={`/table/editetable/${datas.id}`}>
                          <button className='editbtn ' onClick={() => edite_func(datas.id)}>Edite</button>
                        </Link>
                        </td>
                      </tr>
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
