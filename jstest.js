function tennis(P, C) {
    //var C = parseInt(C);
    P = Math.floor(P / 2);
    if (P >= C) {
        return C;
    } else if (P < C); {
        return P;
    }
}

console.log(tennis(70, 80));