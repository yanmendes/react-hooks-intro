import React, { Component } from "react";

import "./CharPicker.css";

class CharPicker extends Component {
  state = { characters: [], isLoading: false };

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    this.setState({ isLoading: true });
    fetch("https://swapi.co/api/people")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(charData => {
        const selectedCharacters = charData.results.slice(0, 5);
        this.setState({
          characters: selectedCharacters.map((char, index) => ({
            name: char.name,
            id: index + 1
          })),
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <p>Loading characters...</p>}

        {!this.state.isLoading &&
          this.state.characters &&
          this.state.characters.length > 0 && (
            <select
              onChange={this.props.onCharSelect}
              value={this.props.selectedChar}
              className={this.props.side}
            >
              {this.state.characters.map(char => (
                <option key={char.id} value={char.id}>
                  {char.name}
                </option>
              ))}
            </select>
          )}

        {!this.state.isLoading &&
          (!this.state.characters || this.state.characters.length === 0) && (
            <p>Could not fetch any data.</p>
          )}
      </>
    );
  }
}

export default CharPicker;
