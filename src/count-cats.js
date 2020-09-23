const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let amountCats = 0;
  let cats = [];
  for (let i = 0; i < matrix.length ; i++) {
    cats = matrix[i].filter(e=> e =='^^');
    amountCats = amountCats + cats.length;
  };
  return amountCats;
};
