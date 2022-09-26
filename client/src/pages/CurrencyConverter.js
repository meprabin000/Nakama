import React from "react";
import Container from "react-bootstrap/Container";
import { Button, Form } from "react-bootstrap";

const CurrencyConverter = (props) => {
    return ( <Container>
        <h1 style={{textAlign: 'center'}}>Currency Converter</h1>
        <Form>
            <Form.Control
                as="textarea"
                placeholder="Yen here..."
                style={{height: '100px'}} 
            />

            <Form.Control
                as="textarea"
                placeholder="Dollar here..."
                style={{height: '100px'}} 
            />
            <Button type="submit">
                Convert
            </Button>
        </Form>
    </Container> );
}
 
export default CurrencyConverter;