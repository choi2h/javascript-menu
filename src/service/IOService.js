import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

class IOService {
  #inputView;

  #outputView;

  #validator;

  constructor(inputView, outputView, validator) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#validator = validator;
  }

  async readCoachsNames() {
    const input = await this.#inputView.readCoachsNames();
    this.#validator.validateInputCoachNames(input);

    return input;
  }

  async readDislikeMenus(name) {
    const input = await this.#inputView.readDislikeMenus(name);
    this.#validator.validateInputDislikeMenus(input);

    return input;
  }

  printGameStart() {
    this.#outputView.print(OUTPUT_MESSAGE.serviceInfo.START_SERVICE);
  }

  printResult(result) {
    const title = OUTPUT_MESSAGE.recommendResult.RESULT_INFO + OUTPUT_MESSAGE.recommendResult.RESULT_TITLE;
    this.#outputView.print(title + result);
  }

  printGameEnd() {
    this.#outputView.print(OUTPUT_MESSAGE.serviceInfo.END_SERVICE);
  }
}

export default IOService;