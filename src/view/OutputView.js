import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  error(error) {
    this.print(error);
  },
};

export default OutputView;