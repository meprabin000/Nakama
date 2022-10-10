import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";
import {createCache, useCache} from '@react-hook/cache'

function addCache(name, url, response){
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(name).then((cache) => {
        cache.put(url, data);
      });
    }
  };

async function getCache(name, url){
    if (typeof caches === 'undefined') 
        return false;
    
    const cacheStorage = await caches.open(name);
    const cachedResponse = await cacheStorage.match(url);
    
    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }
  
    return cachedResponse.json();
  };

const CurrencyConverter = (props) => {
    const currencyOptions = ["us", "yen"]
    const [amount, setAmount] = useState(1);
    const [option, setOption] = useState("us");
    const [noCache, setNoCache] = useState(false);
    const url = `http://localhost:3001/currency?us=1`;

    // const [usToYenConversionRate, setUsToYenConversionRate] = useState();
    // const [yenToUsConversionRate, setYenToUsConversionRate] = useState();
    const [conversionRate, setConversionRate] = useState();
    
    const {isPending, data, error} = useFetch(url);

    // let usToYenRate = 0;
    // let yenToUsRate = 0;

    if (((error == "TypeError: Failed to fetch" || (data == undefined && error == ""))) && amount > 0)
    {
        // if (option === 'us') {
        //     getCache('us to yen', 'http://localhost:3001').then((item) => {
        //         setUsToYenConversionRate(item)
        // });
        // }
        // else if (option === 'yen'){
        //     getCache('yen to us', 'http://localhost:3001').then((item) => {
        //         console.log(item);
        //         setYenToUsConversionRate(item)});
        // }
        // else {
        // }
        getCache('conversionRate', 'http://localhost:3001').then((item) => {
            setConversionRate(item)
        });
    } else if (error != "TypeError: Failed to fetch" && (data != undefined || error != "") && amount > 0){
        // if (option === 'us') {
        //     usToYenRate = (Number(data.amount)/Number(amount));
        //     const setRate1 = () => {setUsToYenConversionRate(usToYenRate)};
        //     console.log(usToYenConversionRate);
        //     addCache('us to yen', 'http://localhost:3001', usToYenRate);            
        // } 
        // else if (option === 'yen') {
        //     yenToUsRate = (Number(amount)/Number(data.amount));
        //     const setRate2 = () => {setYenToUsConversionRate(Number(data.amount)/Number(amount))};
        //     addCache('yen to us', 'http://localhost:3001', yenToUsRate);
        // }
        const setRate = () => {setConversionRate(data.amount)};
        addCache('conversionRate', 'http://localhost:3001', data.amount);
    }

    return ( <Container>
        <h1 style={{textAlign: 'center'}}>Currency Converter</h1>

        {isPending && <div style={{width: "100%", textAlign: 'center'}}><Spinner animation="border" /></div>}
        {(error && error != "TypeError: Failed to fetch") || amount <= 0 && <p style={{textAlign: 'center', color: 'red'}}>Please enter a valid currency amount</p>}
        {amount > 0 && !isPending && <h5 style={{textAlign: 'center', color: 'blue'}}>{amount} {option === "us" ? "USD" : "YEN"} is equivalent to {option === "us" ? (conversionRate * amount).toFixed(2) : (amount / conversionRate).toFixed(2)} {option === "us" ? "YEN" : "USD"}.</h5>}

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