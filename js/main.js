// Целое число из заданного интервала

const getRandomInt = (min, max) => {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomInt(0, 1);


// Дробное число из заданного интервала

const getRandomCoordinates = (min, max, digit = 3) => {
  if (max > min && max >= 0 && min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(digit);
  }
};

getRandomCoordinates(0, 1);

