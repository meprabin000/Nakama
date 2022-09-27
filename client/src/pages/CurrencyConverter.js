import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";

const CurrencyConverter = (props) => {
    const currencyOptions = ["us", "yen"]
    const [amount, setAmount] = useState(1);
    const [option, setOption] = useState("us");
    const url = `http://localhost:3001/currency?${option}=${amount}`;
    const {isPending, data, error} = useFetch(url);
    
    return ( <Container>
        <h1 style={{textAlign: 'center'}}>Currency Converter</h1>

        {isPending && <div style={{width: "100%", textAlign: 'center'}}><Spinner animation="border" /></div>}
        {error && <p style={{textAlign: 'center', color: 'red'}}>Please enter a valid currency amount</p>}
        {!isPending && !error && <h5 style={{textAlign: 'center', color: 'blue'}}>{amount} {option === "us" ? "USD" : "YEN"} is equivalent to {data.amount} {option === "us" ? "YEN" : "USD"}.</h5>}

        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="currencySelect">
                <Form.Select defaultValue="us" size="md" onChange={(e) => setOption(e.target.value)}>
                    <option value="us">USD To YEN</option>
                    <option value="yen">YEN To USD</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="amount">
                <FloatingLabel label="Amount">
                    <Form.Control
                        as="textarea"
                        placeholder="Enter Amount"
                        style={{height: '100px'}} 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </FloatingLabel>
            </Form.Group>
        </Form>
    </Container> );
}
 
export default CurrencyConverter;