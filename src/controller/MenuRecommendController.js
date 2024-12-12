import { Console } from '@woowacourse/mission-utils';
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
    console.log(this.#coaches);
  }

  async #settingCoaches() {
    const names = await this.#ioService.readCoachsNames();
    this.#coaches = names.split(',').map(name => new Coach(name));
  }
}

export default MenuRecommandController;