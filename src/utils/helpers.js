export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
  }

  export const QUESTION_ANSWER_TYPE = {
    OPTION_ONE: 'optionOne',
    OPTION_TWO: 'optionTwo'
  }

  export function getPercentage (option1, option2) {
    const total = option1 + option2;
    return total === 0 ? 0 : parseInt(option1 / total * 100, 10)
  }

