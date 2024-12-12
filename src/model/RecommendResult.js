const MAX_RECOMMEND_COUNT = 2;

class RecommendResult {
  #recommendCategories;

  #coachesRecommendMenus;

  constructor(coaches) {
    this.#recommendCategories = []
    this.#coachesRecommendMenus = {};
    coaches.forEach(coach => {
      this.#coachesRecommendMenus[coach] = [];
    });
  }

  addRecommendCategory(categoryName) {
    this.#recommendCategories.push(categoryName);
  }

  isAlreadyMaxRecommendCategory(categoryName) {
    const count = this.#recommendCategories.filter(category => category === categoryName).length;
    return count > MAX_RECOMMEND_COUNT;
  }

  addRecommandFood(coachName, menu) {
    this.#coachesRecommendMenus[coachName].push(menu);
  }

  isAlreadyRecommandedMenu(coachName, menu) {
    return this.#coachesRecommendMenus[coachName].includes(menu);
  }

  toString() {
    let result = `[ 카테고리 | ${this.#recommendCategories.join(' | ')} ]\n`;
    Object.keys(this.#coachesRecommendMenus).forEach(coachName => {
      result += `[ ${coachName} | ${this.#coachesRecommendMenus[coachName].join(' | ')} ]\n`;
    });

    return result;
  }
}

export default RecommendResult;