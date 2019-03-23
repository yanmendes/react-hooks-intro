import React from "react";

import { useHttp } from "../useHttp";
import "./CharPicker.css";

const CharPicker = props => {
  const [isLoading, fetchedData] = useHttp("https://swapi.co/api/people", []);
  const characters = fetchedData
    ? fetchedData.results.slice(0, 5).map((char, index) => ({
        name: char.name,
        id: index + 1
      }))
    : [];

  return (
    <>
      {isLoading && <p>Loading characters...</p>}

      {!isLoading && characters && characters.length > 0 && (
        <select
          onChange={props.onCharSelect}
          value={props.selectedChar}
          className={props.side}
        >
          {characters.map(char => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      )}

      {!isLoading && (!characters || characters.length === 0) && (
        <p>Could not fetch any data.</p>
      )}
    </>
  );
};

export default CharPicker;
