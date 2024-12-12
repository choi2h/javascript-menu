class MenuRecommandController {
  #ioService;

  constructor(ioService) {
    this.#ioService = ioService;
  }

  start() {
    this.#ioService.printGameStart();
  }
}

export default MenuRecommandController;