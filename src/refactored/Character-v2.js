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
