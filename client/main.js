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
import { TitleBar } from "./../imports/ui/TitleBar";
import { AddPlayer } from "./../imports/ui/AddPlayer";

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

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    //JSX --> JavaScript XML
    let title = "Score Keeper";
    // js can only contain one root element (a parent div or something that encloses everything)
    let jsx = (
      <div>
        <TitleBar title={title} />
        {/* can include array inside handlebars to generate each element automatically (auto-iterate) */}
        {/* however each element must have unique key inside handlebars */}
        {renderPlayers(players)}
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.querySelector("#app"));
  });
});
