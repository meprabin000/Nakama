import { useState } from "react";
import { Table } from "react-bootstrap"
import TranslationListItem from "./TranslationListItem";

const TranslationResultTable = ({translationList}) => {
    let translationIdGenerator = 1;

    return ( <Table responsive striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>English Phrase</th>
                    <th>Japanese Phrase</th>
                    <th>Audio</th>
                </tr>
            </thead>
            <tbody>
                {
                    translationList.map( (item) =>
                        <TranslationListItem key={translationIdGenerator} id={translationIdGenerator++} englishPhrase={item.englishPhrase} japanesePhrase={item.japanesePhrase} pronunciation={item.pronunciation} audioLink={item.audioLink} />
                )
                }
                
            </tbody>
        </Table> );
}
 
export default TranslationResultTable;