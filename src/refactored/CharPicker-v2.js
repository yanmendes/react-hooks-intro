const [isLoading, fetchedData] = useHttp("https://swapi.co/api/people", []);
const characters = fetchedData
  ? fetchedData.results.slice(0, 5).map((char, index) => ({
      name: char.name,
      id: index + 1
    }))
  : [];
