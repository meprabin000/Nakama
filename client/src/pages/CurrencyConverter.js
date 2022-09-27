import React from "react";
import Container from "react-bootstrap/Container";
import { Button, Form } from "react-bootstrap";

const CurrencyConverter = (props) => {
    return ( <Container>
        <h3 style={{textAlign: 'left', marginTop: '20px', marginBottom: '20px'}}>Currency Converter</h3>
        <Form>
            <Form.Control
                as="textarea"
                placeholder="Yen here..."
                style={{height: '100px', marginBottom: '20px'}} 
            />

            <Form.Control
                as="textarea"
                placeholder="Dollar here..."
                style={{height: '100px', marginBottom: '20px'}} 
            />
            <Button type="submit">
                Convert
            </Button>
        </Form>
    </Container> );
}
 
export default CurrencyConverter;