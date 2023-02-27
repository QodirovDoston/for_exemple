import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Create = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const navigate =useNavigate()
  let obj = {
    name: name,
    age: age
  }
  
  const createData = (e) => {
    e.preventDefault()

   axios.post('http://localhost:3004/data',obj)
    .then((res) => {
      if (res.status === 201) {
        alert("seccess")
        setName("")
        setAge("")
        navigate('/table')
      }
    })
  }
  
  return (
    < div style={{ backgroundColor: 'rgb(246, 249, 228)' }}>
      <Container>
        <Row className='justify-content-center mt-1'>
          <Col xs={8}>
            <h1 style={{ textAlign: "center" }}>hello create</h1>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='name'>Name</Form.Label>
                <Form.Control value={name} type="text" placeholder="town name" onChange={(e) => setName(e.target.value)} />
                {name.length < 1 ? <p style={{color:" red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>Age</Form.Label>
                <Form.Control value={age} type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                {age.length < 1 ? <p style={{color:" red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>
               <Button style={{width:"100%"}} variant="primary" onClick={createData}>
              Submit
            </Button> 
          
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
  
}
  export default Create;
  