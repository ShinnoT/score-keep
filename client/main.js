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

import { App } from "./../imports/ui/App";
import { Players } from "./../imports/api/players";

// const removePlayer = (event, playerID) => {
//   event.preventDefault();
//   Players.remove({ _id: playerID });
// };

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();
    //JSX --> JavaScript XML
    let title = "Score Keeper";
    // js can only contain one root element (a parent div or something that encloses everything)
    // let jsx = (
    //   <div>
    //     <TitleBar title={title} />
    //     {/* can include array inside handlebars to generate each element automatically (auto-iterate) */}
    //     {/* however each element must have unique key inside handlebars */}
    //     <PlayerList players={players} />
    //     <AddPlayer />
    //   </div>
    // );
    // ReactDOM.render(jsx, document.querySelector("#app"));
    ReactDOM.render(
      <App players={players} title={title} />,
      document.querySelector("#app")
    );
  });
});
