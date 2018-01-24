// // local file imports
// import { greetUser } from "./../imports/utils";

// console.log("log from /client/main.js");
// console.log(greetUser());

// external modules from npm
import React from "react";
import ReactDOM from "react-dom";

// meteor modules (always starts with meteor/module_name)
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";

const pluralPoints = score => {
  if (score == 0) {
    return "no points";
  } else if (score > 1 || score < -1) {
    return `${score} points`;
  } else {
    return `${score} point`;
  }
};

// const removePlayer = (event, playerID) => {
//   event.preventDefault();
//   Players.remove({ _id: playerID });
// };

const renderPlayers = playersList => {
  if (playersList.lenghth === 0) {
    return null;
  }
  return playersList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {pluralPoints(player.score)}
        <button
          onClick={() => {
            Players.update({ _id: player._id }, { $inc: { score: 1 } });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players.update({ _id: player._id }, { $inc: { score: -1 } });
          }}
        >
          -1
        </button>
        <button onClick={() => Players.remove({ _id: player._id })}>X</button>
      </p>
    );
  });
};

const handleSubmit = event => {
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
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    //JSX --> JavaScript XML
    let title = "Score Keeper";
    // js can only contain one root element (a parent div or something that encloses everything)
    let jsx = (
      <div>
        <h1>{title}</h1>
        {/* can include array inside handlebars to generate each element automatically (auto-iterate) */}
        {/* however each element must have unique key inside handlebars */}
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="playerName"
            placeholder="Player Name"
            autoFocus
          />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.querySelector("#app"));
  });
});
