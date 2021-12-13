import React from 'react'
import { Form, Button, Container, Row,Col} from "react-bootstrap";

const Input = (props) => {
    console.log(props)
    return (
        <>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                 type={props.type} 
                 placeholder={props.placeholder} 
                 value={props.value}
                
                 />
                <Form.Text className="text-muted">
            
                </Form.Text>
              </Form.Group>
        </>
    )
}

export default Input
