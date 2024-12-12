class Coach {
  #name;

  #dislikeFoods;

  #recommendFoods;

  constructor(name) {
    this.#name = name;
    this.#dislikeFoods = [];
    this.#recommendFoods = [];
  }

  get name() {
    return this.#name;
  }

  addDislikeFood(food) {
    this.#dislikeFoods.push(food);
  }

  addRecommandFood(food) {
    this.#recommendFoods.push(food);
  }

  isDislikeFood(food) {
    return this.#dislikeFoods.includes(food);
  }

  isAlreadyRecommanded(food) {
    return this.#recommendFoods.includes(food);
  }

  toString() {
    return `[ ${this.#name} | ${this.#recommendFoods.join(' | ')} ]`;
  }
}

export default Coach;