import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TranslationListItem from "../Components/TranslationListItem";
import TranslationResultTable from "../Components/TranslationResultTable";
import TranslatorSearchBar from "../Components/TranslatorSearchBar";
import "../pagesCss/Translator.css";
import translationList from "../Data/translationList";

const Translator = (props) => {
    const [filteredList, setFilteredList] = useState(translationList);

    const filterByPhrase =(phrase) => {
        const newList = translationList.filter((item) => item.englishPhrase.toLowerCase().includes(phrase));
        setFilteredList(newList);
    }

    return ( 
    <Container>
        <div className="searchBar">
            <TranslatorSearchBar filterBy={filterByPhrase}/>
        </div>
        <div className="translationResultTable">
            <TranslationResultTable translationList={filteredList}/>
        </div>
    </Container> 
    );
}
 
export default Translator;