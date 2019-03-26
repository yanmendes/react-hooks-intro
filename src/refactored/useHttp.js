import React from "react";

const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchedData, setFetchedData] = React.useState(null);

  React.useEffect(() => {
    console.log("Sending http request");
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch person!");
        }
        return response.json();
      })
      .then(response => {
        setFetchedData(response);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};

export default useHttp;
