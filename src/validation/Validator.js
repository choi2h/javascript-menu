import ERROR_MESSAGE from '../constants/ErrorMessage.js';

const SETTING = {
  coachCount: {
    COACH_MIN_COUNT: 2,
    COACH_MAX_COUNT: 5,
  },
  dislikeFoodCount: {
    DISLIKE_FOOD_MAX_COUNT: 2,
  }
}

class Validator {
  #isEmpty(value) {
    return value === '';
  }

  #isNull(value) {
    return value === null;
  }

  #isUndefined(value) {
    return value === undefined;
  }

  #isBlank(input) {
    if (this.#isEmpty(input) ||
      this.#isNull(input) ||
      this.#isUndefined(input)) {
      throw new Error()
    }
  }

  #checkCoachNamesCount(count) {
    const { min, max } = SETTING.coachCount;
    if (count < min || max < count) {
      throw new Error(ERROR_MESSAGE.coach.ERROR_COACHES_SIZE(min, max));
    }
  }

  validateInputCoachNames(input) {
    this.#isBlank(input);
    const names = input.split(',');
    this.#checkCoachNamesCount(names.length);
  }
}

export default Validator;