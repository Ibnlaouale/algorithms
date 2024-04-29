const validmatrix = (m) => {
    let sum = 0;
  let invalidTable = m.find((table) => table.length !== m[0].length);

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
        sum += m[i][j]
    }
  }
  
  if (invalidTable) {
    console.log("matrix invalid");
    return;
  } else {
    console.log("matrix valid");
  }
};

let m = [
  [1, 4, 2, 3],
  [0, 9, 8, 7],
  [12, 33, 44, 22],
  [2, 2, 5, 2],
];
validmatrix(m);
