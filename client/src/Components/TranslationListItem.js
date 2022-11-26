import React, { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";

const TranslationListItem = (props) => {

    // renders each table item in a proper format
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.englishPhrase}</th>
            <th>{props.japanesePhrase + "(" + props.pronunciation + ")"}</th>
            <th>
            <audio controls>
                <source src={props.audioLink} type="audio/wav" />
            </audio>
            </th>
        </tr>);
}
 
export default TranslationListItem;