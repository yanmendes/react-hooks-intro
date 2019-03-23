import React from "react";

import { useHttp } from "../useHttp";
import Summary from "./Summary";

const Character = props => {
  const [isLoading, fetchedData] = useHttp(
    "https://swapi.co/api/people/" + props.selectedChar,
    [props.selectedChar]
  );

  const loadedCharacter = fetchedData
    ? {
        id: props.selectedChar,
        name: fetchedData.name,
        height: fetchedData.height,
        colors: {
          hair: fetchedData.hair_color,
          skin: fetchedData.skin_color
        },
        gender: fetchedData.gender,
        movieCount: fetchedData.films.length
      }
    : {};

  return (
    <>
      {isLoading && <p>Loading Character...</p>}
      {!isLoading && loadedCharacter.id && (
        <Summary
          name={loadedCharacter.name}
          gender={loadedCharacter.gender}
          height={loadedCharacter.height}
          hairColor={loadedCharacter.colors.hair}
          skinColor={loadedCharacter.colors.skin}
          movieCount={loadedCharacter.movieCount}
        />
      )}
      {!isLoading && !loadedCharacter.id && <p>Failed to fetch character.</p>}
    </>
  );
};

export default React.memo(
  Character,
  (prevProps, nextProps) => nextProps.selectedChar === prevProps.selectedChar
);
