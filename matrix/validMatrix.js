const validmatrix = (m) => {
  let invalidTable,
    notNumber = [];

  invalidTable = m.find((table) => table.length !== m[0].length);

  for (let k = 0; k < m.length; k++) {
    for (let l = 0; l < m[k].length; l++) {
      if (typeof m[k][l] !== "number") {
        notNumber.push(m[k][l]);
      }
    }
  }

  // console.log("type ====>", checkType,invalidTable, notNumber, notNumber.length);
  if ((invalidTable || !invalidTable) && notNumber.length > 0) {
    console.log("matrix invalid");
    return;
  } else {
    console.log("matrix valid");
    return
  }
};

let m = [
  [1, 4, 2, 3],
  [0, 9, 3, 7],
  [12, , 44, 22],
  [2, 3, 5, 2],
];

validmatrix(m);
