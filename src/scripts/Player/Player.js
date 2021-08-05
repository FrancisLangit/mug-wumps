const Player = (enemyGameboard, isComputer) => {
    const makeRandomAttack = () => {
        return undefined;
    }

    const makeAttack = (x, y) => {
        enemyGameboard.receiveAttack(x, y);
    }

    return isComputer ? { makeRandomAttack } : { makeAttack };
}


export { Player }