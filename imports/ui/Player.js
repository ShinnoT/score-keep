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
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place -{" "}
              {this.pluralPoints(this.props.player.score)}
            </p>
          </div>
          <div>
            <button
              className="button button--round"
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
              className="button button--round"
              onClick={() => {
                Players.update(
                  { _id: this.props.player._id },
                  { $inc: { score: -1 } }
                );
              }}
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => Players.remove({ _id: this.props.player._id })}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
