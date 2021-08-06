const Player = (enemyGameboard, isComputer) => {
    const _isPositionHit = (x, y) => {
        for (const ship of enemyGameboard.ships) {
            let positions = ship.getPositions();
            for (let i = 0; i < positions.length; i++) {
                const position = positions[i].toString();
                const isInShip = position === [x, y].toString();
                if (isInShip && ship.hits[i]) {
                    return true;
                }
            }
        }
    }

    const _isPositionMiss = (x, y) => {
        for (let i = 0; i < enemyGameboard.misses.length; i++) {
            const miss = enemyGameboard.misses[i];
            if ([x, y].toString() === miss.toString()) {
                return true;
            }
        }
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
        makeAttack(choice[0], choice[1]);
    }

    const makeAttack = (x, y) => {
        enemyGameboard.receiveAttack(x, y);
    }

    return isComputer ? { makeRandomAttack } : { makeAttack };
}


export { Player }