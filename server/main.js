// // local file imports
// import add, { greetUser, name } from "./../imports/utils";
// // add here is named right in this file because it is a default

// console.log("log from /server/main.js");
// console.log(greetUser());
// console.log(name);
// console.log(add(1, 1));

import { Players } from "./../imports/api/players";

import { Meteor } from "meteor/meteor";

//.startup is an event listener that "on startup" does something
Meteor.startup(() => {
  console.log("server up");
  // Players.insert({
  //   name: "Bob",
  //   score: 3
  // });

  console.log(Players.find().fetch());
});
