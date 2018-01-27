import React from "react";
import { Player } from "./Player";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";

export class PlayerList extends React.Component {
  renderPlayer() {
    let players = this.props.players;
    if (players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">No players, create some...</p>
        </div>
      );
    }
    return players.map(player => {
      return <Player key={player._id} player={player} />;
    });
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayer()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
