import React, { Component } from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

class App extends Component {
  state = {
    selectedCharacter: 1,
    side: "light",
    destroyed: false
  };

  render() {
    return (
      <>
        {this.state.destroyed ? (
          <h1>Total destruction!</h1>
        ) : (
          <>
            <CharPicker
              side={this.state.side}
              selectedChar={this.state.selectedCharacter}
              onCharSelect={e =>
                this.setState({ selectedCharacter: e.target.value })
              }
            />
            <Character selectedChar={this.state.selectedCharacter} />
            <button onClick={() => this.setState({ side: "light" })}>
              Light Side
            </button>
            <button onClick={() => this.setState({ side: "dark" })}>
              Dark Side
            </button>
            {this.state.side === "dark" && (
              <button onClick={() => this.setState({ destroyed: true })}>
                DESTROY!
              </button>
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
