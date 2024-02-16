import getRandomNum from '../random.js';
import rulesOfTheGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = getRandomNum(1, 100);
  const correctanswer = isPrime(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctanswer, Quest];
};

const gamePrime = () => {
  rulesOfTheGame(game, rule);
};
export default gamePrime;
