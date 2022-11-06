import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TranslatorSearchBar = ({filterBy}) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    return ( 
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
                type="search"
                placeholder="Enter english phrase to translate"
                className="me-2"
                aria-label="Search"
                value={searchPhrase}
                onChange={(e) => setSearchPhrase(e.target.value)}
            />
            {/* on button click filters the result */}
            <Button variant="outline-success" onClick={(e) => filterBy(searchPhrase)} type="submit">Search</Button>
        </Form>
);
}
 
export default TranslatorSearchBar;