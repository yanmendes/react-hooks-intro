/*
console.log onMount
componentDidUnmount
Memo desde 16.6 faz o shouldComponentUpdate
*/

import React from "react";

import Summary from "./Summary";

const Character = props => {
 const [loadedCharacter, setLoadedCharacter] = React.useState({});
 const [isLoading, setIsLoading] = React.useState(false);

 React.useEffect(() => {
   fetchData();
 }, []);

 React.useEffect(() => {
     fetchData();
 },[props.selectedChar]);

 React.useEffect(() => () => console.log("Too soon..."), []);


