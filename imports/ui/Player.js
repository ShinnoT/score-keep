import React from "react";
import { Players } from "./../api/players";
import PropTypes from "prop-types";

export class Player extends React.Component {
  pluralPoints(score) {
    if (score == 0) {
      return "no points";
    } else if (score > 1 || score < -1) {
      return `${score} points`;
    } else {
      return `${score} point`;
    }
  }

  render() {
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} has{" "}
        {this.pluralPoints(this.props.player.score)}
        <button
          onClick={() => {
            Players.update(
              { _id: this.props.player._id },
              { $inc: { score: 1 } }
            );
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players.update(
              { _id: this.props.player._id },
              { $inc: { score: -1 } }
            );
          }}
        >
          -1
        </button>
        <button onClick={() => Players.remove({ _id: this.props.player._id })}>
          X
        </button>
      </p>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
