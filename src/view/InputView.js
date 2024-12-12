import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

const InputView = {
  async readCoachsNames() {
    return Console.readLineAsync(OUTPUT_MESSAGE.inputRequest.REQUEST_COACHS_NAME);
  }

}

export default InputView;