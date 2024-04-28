const productNfirst = (n) => {
    let result = 1;
    if (n<=0) {
        console.log('Impossible entier négatif');
        return
    } else {
        for(let i=1; i<=n; i++){
            result *= i;
        }
        console.log(`le produit de ${n} premier entiers positifs est : ${result}`);
        return;
    }
}

productNfirst(5)