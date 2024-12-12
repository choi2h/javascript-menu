import { Random } from '@woowacourse/mission-utils';

class RecommendService {

  #categoryNames;

  #categories;

  constructor(allMenusWithCategory) {
    this.#categoryNames = Object.keys(allMenusWithCategory);
    this.#initCategories(allMenusWithCategory);
  }

  #initCategories(allMenusWithCategory) {
    this.#categories = {};

    this.#categoryNames.forEach(name => {
      const menus = allMenusWithCategory[name].split(',').filter(menu => menu);
      this.#categories[name] = menus;
    });
  }

  recommendCategory() {
    return this.#categoryNames[Random.pickNumberInRange(0, 4)];
  }

  recommendMenuOfCategory(category) {
    const menusOfCategory = this.#categories[category];
    return menusOfCategory[Random.pickNumberInRange(0, menusOfCategory.length - 1)];
  }
}

export default RecommendService;