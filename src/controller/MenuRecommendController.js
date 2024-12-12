import Coach from '../model/Coach.js';

class MenuRecommandController {
  #ioService;

  #coaches;

  constructor(ioService) {
    this.#ioService = ioService;
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