import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";

//creates cache entry into window browser or updates existing entries
function addCache(name, url, response){
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(name).then((cache) => {
        cache.put(url, data);
      });
    }
  };

//obtains the cached data by matching name and url
async function getCache(name, url){
    const storage = await caches.open(name);
    const response = await storage.match(url);

    return response.json();
  };

const CurrencyConverter = (props) => {
    const currencyOptions = ["us", "yen"]
    const [amount, setAmount] = useState(1);
    const [option, setOption] = useState("us");
    const url = `http://localhost:3001/currency?us=1`;


    const [conversionRate, setConversionRate] = useState();
    
    //attempts to fetch api no matter what state
    const {isPending, data, error} = useFetch(url);

    //when fetch isn't returning anything or there's an error, use cached data as conversionRate
    if ((error || (data == undefined && error == "")) && amount > 0)
    {
        getCache('conversionRate', 'http://localhost:3001').then((item) => {
            setConversionRate(item);
        });
    }
    //when fetch is returning data, add or set cached data and use it as the conversionRate 
    else if (!error && (data != undefined || error != "") && amount > 0){
        const setRate = () => {
            setConversionRate(data.amount);
        };
        addCache('conversionRate', 'http://localhost:3001', data.amount);
    }

    return ( <Container>
        <h1 style={{textAlign: 'center'}}>Currency Converter</h1>
        
        {/*these four headings display the state of the program:  pending, invalid input, no internet and no cache data, and working */}
        {conversionRate && isPending && <div style={{width: "100%", textAlign: 'center'}}><Spinner animation="border" /></div>}
        {conversionRate && amount <= 0 && <p style={{textAlign: 'center', color: 'red'}}>Please enter a valid currency amount</p>}
        {!conversionRate && <p style={{textAlign: 'center', color: 'red'}}>Cannot reach server, please connect to internet once</p>}
        {conversionRate && amount > 0 && !isPending && <h5 style={{textAlign: 'center', color: 'blue'}}>{amount} {option === "us" ? "USD" : "YEN"} is equivalent to {option === "us" ? (conversionRate * amount).toFixed(2) : (amount / conversionRate).toFixed(2)} {option === "us" ? "YEN" : "USD"}.</h5>}

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