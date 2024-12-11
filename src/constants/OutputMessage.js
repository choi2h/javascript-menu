const OUTPUT_MESSAGE = Object.freeze({
  serviceInfo: {
    START_SERVICE: '점심 메뉴 추천을 시작합니다.\n',
    END_SERVICE: '추천을 완료했습니다.',
  },
  inputRequest: {
    REQUEST_COACHS_NAME: '코치의 이름을 입력해 주세요. (,로 구분)',
    REQUEST_CAN_NOT_EAT_FOOD: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  },
  recommendResult: {
    RESULT_INFO: '메뉴 추천 결과입니다.',
  }
});

export default OUTPUT_MESSAGE;