import { Gameboard } from './Gameboard'; 

test('"ships" property of object returned by Gameboard()', () => {
    expect(Gameboard()).toHaveProperty('ships');
});

test('"misses" property of object returned by Gameboard()', () => {
    expect(Gameboard()).toHaveProperty('misses', []);
});