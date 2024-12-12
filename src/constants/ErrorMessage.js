const PRIFIX_ERROR_MESSAGE = '[ERROR]';

const ERROR_MESSAGE = {
  default: {
    ERROR: (message) => `${PRIFIX_ERROR_MESSAGE} ${message}`,
    ERROR_BLANK_MESSAGE: `${PRIFIX_ERROR_MESSAGE} 빈 값은 입력하실 수 없습니다.`,
  },
  coach: {
    ERROR_COACHES_SIZE: (min, max) => `${PRIFIX_ERROR_MESSAGE} 코치명은 ${min}명에서 ${max}명 사이로 입력해주세요.`,
    ERROR_EXEED_DISLIKE_FOOD_COUNT: (count) => `${PRIFIX_ERROR_MESSAGE} 못 먹는 메뉴는 최대 ${count}개까지 입력할 수 있습니다.`,
  }
}

export default ERROR_MESSAGE;