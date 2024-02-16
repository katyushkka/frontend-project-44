import getRandomNum from '../random.js';
import rulesOfTheGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const Quest = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [correctAnswer, Quest];
};

const gameGcd = () => {
  rulesOfTheGame(game, rule);
};

export default gameGcd;
