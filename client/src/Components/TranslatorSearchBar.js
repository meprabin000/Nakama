import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TranslatorSearchBar = ({filterBy}) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    return ( 
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
                type="search"
                placeholder="Search here"
                className="me-2"
                aria-label="Search"
                value={searchPhrase}
                onChange={(e) => setSearchPhrase(e.target.value)}
                style={{fontFamily: 'baskerville'}}
            />
            {/* on button click filters the result */}
            <Button variant="outline-success" onClick={(e) => filterBy(searchPhrase)} type="submit" style={{color: '#470000', borderColor: '#470000', fontFamily: 'baskerville', backgroundColor:'white'}}>Search</Button>
        </Form>
);
}
 
export default TranslatorSearchBar;