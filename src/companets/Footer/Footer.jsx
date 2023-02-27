import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState([])

 
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

  useEffect(()=>{
    GetAllData()
  },[])


  const edite_func = (id) => {
    axios.edikkjte(`http://localhost:3004/data/${id}`)
        .then((res) => {
            alert(res.statusText)
        })
}
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        get Data
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        <Dropdown.Item href="#/action-3">6</Dropdown.Item>
        <Dropdown.Item href="#/action-3">7</Dropdown.Item>
        <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        <Dropdown.Item href="#/action-3">9</Dropdown.Item>
        <Dropdown.Item href="#/action-3">10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
                {data?.map((data)=>{
                  return(
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <img style={{width:"100px",height:"80px"}} src={data.img} alt="" />
                      <button onClick={()=>DeleteData(data.id)}>Delete</button>
                      <Link to={`/table/editetable/${data.id}`}>
                                <button className='editbtn ' onClick={() => edite_func(data.id)}>Edite</button>
                            </Link>

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
