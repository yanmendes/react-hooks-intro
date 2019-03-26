/*
Use effect tem dois parâmetros: uma função e um array de dependências
É chamado toda vez que um componente precisa ser renderizado novamente (mudança de props ou estado) 
*/

import React from "react";

import "./CharPicker.css";

const CharPicker = props => {
 const [characters, setCharacters] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(false);

 React.useEffect(() => {
   fetchData();
 }, []);


