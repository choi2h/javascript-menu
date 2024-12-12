class Category {
  #name;

  #menus;

  constructor(name, menus) {
    this.#name = name;
    this.#menus = menus;
  }

  get name() {
    return this.#name;
  }

  get menus() {
    return this.#menus;
  }
}

export default Category;