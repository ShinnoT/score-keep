import React from "react";
import { Player } from "./Player";
import PropTypes from "prop-types";

export class PlayerList extends React.Component {
  renderPlayer() {
    let players = this.props.players;
    if (players.length === 0) {
      return <p>No players, create some...</p>;
    }
    return players.map(player => {
      return <Player key={player._id} player={player} />;
    });
  }
  render() {
    return <div>{this.renderPlayer()}</div>;
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
