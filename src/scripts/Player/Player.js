const Player = (enemyGameboard, isComputer) => {
    const _isPositionHit = (x, y) => {
        let isHit = false
        enemyGameboard.ships.forEach((ship) => {
            ship.getPositions().forEach((position) => {
                const isTarget = position.toString() === [x, y].toString();
                const isPositionHit = position === true
                if (isTarget && isPositionHit) {
                    isHit = true;
                }
            });
        });
        return isHit;
    }

    const _isPositionMiss = (x, y) => {
        let isMiss = false
        enemyGameboard.misses.forEach((miss) => {
            if ([x, y].toString() === miss.toString()) {
                isMiss = true;
            }
        });
        return isMiss;
    }
    
    const makeRandomAttack = () => {
        let choices = []
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {      
                if (!_isPositionHit(x, y) && !_isPositionMiss(x, y)) {
                    choices.push([x, y]);
                }
            }
        }
        const choiceIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[choiceIndex];
        enemyGameboard.receiveAttack(choice[0], choice[1]);
    }

    const makeAttack = (x, y) => {
        enemyGameboard.receiveAttack(x, y);
    }

    return isComputer ? { makeRandomAttack } : { makeAttack };
}


export { Player }