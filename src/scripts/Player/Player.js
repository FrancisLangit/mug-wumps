const Player = (enemyGameboard) => {

    const makeAttack = (x, y) => {
        enemyGameboard.receiveAttack(x, y);
    }

    return { makeAttack };
}


export { Player }