const Player = (enemyGameboard, isComputer) => {
    const makeAttack = (x, y) => {
        return undefined;
    }

    const makeRandomAttack = () => {
        return undefined;
    }

    return isComputer ? { makeRandomAttack } : { makeAttack };
}


export { Player }