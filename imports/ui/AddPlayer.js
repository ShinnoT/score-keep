import React from "react";
import { Players } from "./../api/players";
import PropTypes from "prop-types";

// const handleSubmit = event => {
//   event.preventDefault();
//   // event.target === HTML form with onSubmit property so:
//   let playerName = event.target.playerName.value;
//   if (playerName) {
//     event.target.playerName.value = null;
//     Players.insert({
//       name: playerName,
//       score: 0
//     });
//   }
// };

export class AddPlayer extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    // event.target === HTML form with onSubmit property so:
    let playerName = event.target.playerName.value;
    if (playerName) {
      event.target.playerName.value = null;
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            type="text"
            name="playerName"
            placeholder="Player Name"
            autoFocus
          />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
