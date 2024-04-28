const nXmatrix = (n, m) => {
  let m1 = m;
  let exist = m.find((el) => el.length !== m[0].length);
  if (exist) {
    console.log(`matrix invalid`);
    return;
  } else {
    console.log('la matrix valid');
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        m[i][j] *= n;
      }
    }
    console.log("le produit scalire de la matrice", m1,"par ,",n,"est la matrice:",m);
    return;
  }
 
};

let n = 2;
let m = [[1, 3, 3, 4],[0, 9, 8, 7],[12, 33, 44, 22],[2, 2, 5, 2]];
nXmatrix(n, m);
