import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TranslationListItem from "../Components/TranslationListItem";
import TranslationResultTable from "../Components/TranslationResultTable";
import TranslatorSearchBar from "../Components/TranslatorSearchBar";
import "../pagesCss/Translator.css";
import translationList from "../Data/translationList";

const Translator = (props) => {
    const [filteredList, setFilteredList] = useState(translationList);

    // filters out the translations whose english phrase doesn't contain the 'phrase' in the parameter
    const filterByPhrase =(phrase) => {
        const newList = translationList.filter((item) => item.englishPhrase.toLowerCase().includes(phrase.toLowerCase()));
        setFilteredList(newList);
    }

    return ( 
    <Container>
        {/* search bar to filter the audio data based on english phrase */}
        <div className="searchBar">
            <TranslatorSearchBar filterBy={filterByPhrase}/>
        </div>

        {/* translation table to display the filtered data */}
        <div className="translationResultTable">
            <TranslationResultTable translationList={filteredList}/>
        </div>
    </Container> 
    );
}
 
export default Translator;