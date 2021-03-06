import React, { Component } from "react";

import Summary from "./Summary";

class Character extends Component {
  state = { loadedCharacter: {}, isLoading: false };

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return (
      nextProps.selectedChar !== this.props.selectedChar ||
      nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
      nextState.isLoading !== this.state.isLoading
    );
  }

  componentDidUpdate(prevProps) {
    console.log("Component did update");
    if (prevProps.selectedChar !== this.props.selectedChar) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    console.log("Too soon...");
  }

  fetchData = () => {
    console.log("Sending Http request at Character.js");
    this.setState({ isLoading: true });
    fetch("https://swapi.co/api/people/" + this.props.selectedChar)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch person!");
        }
        return response.json();
      })
      .then(charData => {
        const loadedCharacter = {
          id: this.props.selectedChar,
          name: charData.name,
          height: charData.height,
          colors: {
            hair: charData.hair_color,
            skin: charData.skin_color
          },
          gender: charData.gender,
          movieCount: charData.films.length
        };
        this.setState({ loadedCharacter });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <>
        {this.state.isLoading && <p>Loading Character...</p>}
        {!this.state.isLoading && this.state.loadedCharacter.id && (
          <Summary
            name={this.state.loadedCharacter.name}
            gender={this.state.loadedCharacter.gender}
            height={this.state.loadedCharacter.height}
            hairColor={this.state.loadedCharacter.colors.hair}
            skinColor={this.state.loadedCharacter.colors.skin}
            movieCount={this.state.loadedCharacter.movieCount}
          />
        )}
        {!this.state.isLoading && !this.state.loadedCharacter.id && (
          <p>Failed to fetch character.</p>
        )}
      </>
    );
  }
}

export default Character;
