import getRandomNum from '../random.js';
import rulesOfTheGame from '../index.js';

const rule = 'What number is missing in the progression?';
const progressionLenght = getRandomNum(5, 10);

const progression = () => {
  const step = getRandomNum(1, 10);
  const resultProgression = [];
  const startNum = getRandomNum(1, 100);
  for (let i = 0; i <= progressionLenght; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  return resultProgression;
};

const game = () => {
  const resultProgression = progression();
  const hiddenIndex = getRandomNum(0, progressionLenght - 1);
  const correcrAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const Quest = resultProgression.join(' ');
  return [correcrAnswer, Quest];
};

const gameProgression = () => {
  rulesOfTheGame(game, rule);
};

export default gameProgression;
