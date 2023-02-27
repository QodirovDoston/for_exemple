import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={8}>
                        <p style={{color:"blue" ,fontSize:"25px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus consectetur provident, ratione dicta repellendus recusandae minima consequuntur non soluta quod qui magni officia reiciendis alias, dignissimos nam exercitationem a voluptate! Quam unde optio et aut laboriosam nisi vitae doloremque deserunt sequi, officia, ab eveniet tenetur totam? Beatae, ipsa aut. Recusandae, aliquid magni reprehenderit impedit sapiente ut ducimus officia perferendis culpa? Expedita cum impedit molestias assumenda nisi vel sint voluptatem libero deserunt dolores obcaecati odio facere error, qui iure quae quas praesentium, delectus sequi tenetur voluptatum nemo. Laborum molestiae, molestias sunt ea animi aut autem? Accusantium earum corporis praesentium quisquam tenetur!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
