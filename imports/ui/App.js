import React from "react";

import { TitleBar } from "./TitleBar";
import { AddPlayer } from "./AddPlayer";
// import { Player } from "./Player";
import { PlayerList } from "./PlayerList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} />
        <PlayerList players={this.props.players} />
        <AddPlayer />
      </div>
    );
  }
}