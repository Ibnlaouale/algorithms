const sumNfirstInt = (n) => {
    let result = 0;
    if (n<0) {
        console.log('impossible entier négatif');
        return;
    } else {
        for (let i = 0; i <= n; i++) {
            result += i ;
        }
    }
    console.log(`la somme de ${n} premier entiers vaut: ${result}`);
    return
}

sumNfirstInt(-10)
sumNfirstInt(20)

