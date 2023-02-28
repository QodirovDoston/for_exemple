import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const EditeData = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const GetOne = (id) => {
        axios.get(`http://localhost:3004/data/${id}`).then((data) => {
            console.log(data.data.name);
            setName(data.data.name)
            setAge(data.data.age)
            setImg(data.data.img)
        })
    }

    useEffect(() => {
        GetOne(id)
    }, [])
    console.log(id);

    const editeData_func = () => {
        let obj = {
            name: name,
            age: age,
            img: img,
        }
        axios.put(`http://localhost:3004/data/${id}`, obj).then((res) => {
            alert(res.statusText)
            navigate('/table')
        })
    }

    return (
        < div style={{ backgroundColor: 'rgb(246, 249, 228)' }}>
            <Container>
                <Row className='justify-content-center mt-1'>
                    <Col xs={8}>
                        <h1 style={{ textAlign: "center" }}>hello edite page</h1>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='name'>Name</Form.Label>
                                <Form.Control value={name} type="text" placeholder="town name" onChange={(e) => setName(e.target.value)} />
                                {name.length < 1 ? <p style={{ color: "red" }}>error</p> : <p style={{ color: "green" }}>success</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='name'>Age</Form.Label>
                                <Form.Control value={age} type="text" placeholder="age" onChange={(e) => setAge(e.target.value)} />
                                {age.length < 1 ? <p style={{ color: "red" }}>error</p> : <p style={{ color: "green" }}>success</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='name'>img</Form.Label>
                                <Form.Control value={img} type="text" placeholder="img" onChange={(e) => setImg(e.target.value)} />
                                {img.length < 1 ? <p style={{ color: "red" }}>error</p> : <p style={{ color: "green" }}>success</p>}
                            </Form.Group>
                            {name.length < 2 ?
                                <Button style={{ width: "100%" }} variant="primary"> Submit </Button> : <Button style={{ width: "100%" }} variant="primary" onClick={editeData_func}>
                                    Submit
                                </Button>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default EditeData