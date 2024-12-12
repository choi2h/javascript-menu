import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

class IOService {
  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  printGameStart() {
    this.#outputView.print(OUTPUT_MESSAGE.serviceInfo.START_SERVICE);
  }

  printGameEnd() {
    this.#outputView.print(OUTPUT_MESSAGE.serviceInfo.END_SERVICE);
  }
}

export default IOService;