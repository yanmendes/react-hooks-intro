/*
React não faz o merge dos estados como em setState. 
Você pode ter mais de um estado por componente e não precisa ser necessariamente um objeto.
Hooks no nível mais alto do componente para garantir isso ^ (depende da ordem cronológica das chamadas internamente)
 */

import React from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = () => {
const [state, setState] = React.useState({
  selectedCharacter: 1,
  side: 'light',
  destroyed: false
})
