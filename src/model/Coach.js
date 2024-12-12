class Coach {
  #name;

  #dislikeMenus;

  constructor(name) {
    this.#name = name;
    this.#dislikeMenus = [];
  }

  get name() {
    return this.#name;
  }

  addDislikeMenu(menu) {
    this.#dislikeMenus.push(menu);
  }

  isDislikeMenu(menu) {
    return this.#dislikeMenus.includes(menu);
  }
}

export default Coach;