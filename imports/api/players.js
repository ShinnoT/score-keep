import { Mongo } from "meteor/mongo";
import numeral from "numeral";

export const Players = new Mongo.Collection("players");

export const calculatePlayerPositions = playersArray => {
  let rank = 1;
  return playersArray.map((player, index) => {
    if (index !== 0 && playersArray[index - 1].score > player.score) {
      rank++;
    }
    return {
      ...player,
      rank,
      position: numeral(rank).format("0o")
    };
  });
};
