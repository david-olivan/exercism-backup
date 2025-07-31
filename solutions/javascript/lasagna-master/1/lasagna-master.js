/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus (remainingTime) {
  switch (remainingTime) {
    case 0:
      return "Lasagna is done.";
    case undefined:
      return "You forgot to set the timer.";
    default:
      return "Not done, please wait.";
  }
}

export function preparationTime (layers, prepTimePerLayer = 2) {
  return layers.length * prepTimePerLayer;
}

export function quantities (layers) {
  let obj = {noodles: 0, sauce: 0};
  
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "sauce") {
      obj.sauce++;
    } else if (layers[i] === "noodles") {
      obj.noodles++;
    }
  }

  obj.noodles *= 50;
  obj.sauce *= 0.2;

  return obj;
}

export function addSecretIngredient (friendIngredients, ownIngredients) {
  ownIngredients.push(friendIngredients.slice(-1)[0]);
}

export function scaleRecipe (recipe, targetPortions) {
  let obj = {};
  
  for (let key in recipe) {
    obj[key] = recipe[key] / 2 * targetPortions
  }

  return obj;
}
