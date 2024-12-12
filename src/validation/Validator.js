import ERROR_MESSAGE from '../constants/ErrorMessage.js';

const SETTING = {
  coachCount: {
    COACH_MIN_COUNT: 2,
    COACH_MAX_COUNT: 5,
  },
  dislikeMenuCount: {
    DISLIKE_MENU_MAX_COUNT: 2,
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
      throw new Error(ERROR_MESSAGE.default.ERROR_BLANK_MESSAGE);
    }
  }

  #checkCoachNamesCount(count) {
    const { COACH_MIN_COUNT, COACH_MAX_COUNT } = SETTING.coachCount;
    if (count < COACH_MIN_COUNT || COACH_MAX_COUNT < count) {
      throw new Error(ERROR_MESSAGE.coach.ERROR_COACHES_SIZE(COACH_MIN_COUNT, COACH_MAX_COUNT));
    }
  }

  validateInputCoachNames(input) {
    this.#isBlank(input);
    const names = input.split(',');
    this.#checkCoachNamesCount(names.length);
  }

  #checkInputMenusSize(input) {
    const inputMenus = input.split(',');
    const maxCount = SETTING.dislikeMenuCount.DISLIKE_MENU_MAX_COUNT;
    if (inputMenus.length > maxCount) {
      throw new Error(ERROR_MESSAGE.coach.ERROR_EXEED_DISLIKE_FOOD_COUNT(maxCount))
    }
  }

  validateInputDislikeMenus(input) {
    if (this.#isNull(input) || this.#isUndefined(input)) {
      throw new Error(ERROR_MESSAGE.default.ERROR_BLANK_MESSAGE);
    }

    if (!this.#isEmpty(input)) {
      this.#checkInputMenusSize(input);
    }
  }
}

export default Validator;