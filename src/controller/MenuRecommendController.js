import Coach from '../model/Coach.js';
import RecommendResult from '../model/RecommendResult.js';

class MenuRecommandController {
  #ioService;

  #recommendService;

  #coaches;

  #recommendResult;

  constructor(ioService, recommendService) {
    this.#ioService = ioService;
    this.#recommendService = recommendService;
  }

  async start() {
    this.#ioService.printGameStart();
    await this.#settingCoaches();
    await this.#settingCoachesDisLikeMenus();

    const coachNames = this.#coaches.map(coach => coach.name);
    this.#recommendResult = new RecommendResult(coachNames);
    this.#recommend();
    this.#ioService.printResult(this.#recommendResult.toString());
    this.#ioService.printGameEnd();
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
      inputMenus.split(',').forEach(menu => coach.addDislikeMenu(menu));
    }
  }

  #recommend() {
    for (let i = 0; i < 5; i++) {
      const category = this.#recommendCategory();
      this.#coaches.forEach(coach => this.#recommendMenuOfCategory(coach, category));
    }
  }

  #recommendCategory() {
    let category;
    let isFinish = false;
    while (!isFinish) {
      category = this.#recommendService.recommendCategory();
      if (!this.#recommendResult.isAlreadyMaxRecommendCategory(category)) {
        isFinish = true;
        this.#recommendResult.addRecommendCategory(category);
      }
    }

    return category;
  }

  #recommendMenuOfCategory(coach, category) {
    const { name } = coach;
    let isFinish = false;
    while (!isFinish) {
      const recommendMenu = this.#recommendService.recommendMenuOfCategory(category);
      if (!coach.isDislikeMenu(recommendMenu) && !this.#recommendResult.isAlreadyRecommandedMenu(name, recommendMenu)) {
        isFinish = true;
        this.#recommendResult.addRecommandFood(name, recommendMenu);
      }
    }
  }
}

export default MenuRecommandController;