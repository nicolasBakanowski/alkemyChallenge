

function hashPass(passPlain){
    let saltRounds = 10;
    let hashedPassword = bcrypt.hash(passPlain,saltRounds);
}

