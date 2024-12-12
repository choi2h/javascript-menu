import Coach from '../model/Coach.js';
import Category from '../model/Category.js';

class MenuRecommandController {
  #ioService;

  #coaches;

  #categories;

  constructor(ioService, allMenusWithCategory) {
    this.#ioService = ioService;
    this.#initCategories(allMenusWithCategory);
  }

  #initCategories(allMenusWithCategory) {
    this.#categories = {};

    const keys = Object.keys(allMenusWithCategory);
    keys.forEach(name => {
      const arr = allMenusWithCategory[name].split(',').filter(menu => menu);
      this.#categories[name] = new Category(name, arr);
    });
  }

  async start() {
    this.#ioService.printGameStart();
    await this.#settingCoaches();
    await this.#settingCoachesDisLikeMenus();
  }

  async #settingCoaches() {
    const names = await this.#ioService.readCoachsNames();
    this.#coaches = names.split(',').map(name => new Coach(name));
  }

  async #settingCoachesDisLikeMenus() {
    for (let i = 0; i < this.#coaches.length; i++) {
      await this.#settingCoachDislikeMenus(this.#coaches[i]);
    }
  }

  async #settingCoachDislikeMenus(coach) {
    const inputMenus = await this.#ioService.readDislikeMenus(coach.name);
    if (inputMenus !== '') {
      inputMenus.split(',').forEach(menu => coach.addDislikeFood(menu));
    }
  }
}

export default MenuRecommandController;