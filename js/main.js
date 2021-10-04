const ctx = document.getElementById('myCanvas').getContext('2d');
const GAMECOL = 10;
const GAMEROW = 20;
const SIDE = 30;
const COLOR = '#7A7A7A';
const SHAPE = [
    [I, "black"],
    [O, "black"],
    [L, "black"],
    [J, "black"],
    [S, "black"],
    [Z, "black"],
    [T, "black"]
]
let result = "Press Space to Replay";
let game = new Game(ctx, SIDE, GAMECOL, GAMEROW, COLOR);
game.getBoard();

function randomShape() {
    let r = Math.floor(Math.random() * SHAPE.length);
    return new Shape(game, SHAPE[r][0], SHAPE[r][1]);
}

game.drawBoard();
let p = randomShape();

// console.log(game.getBoard());

let interval;

function gameLoop() {
    interval = setInterval(loop, 800)
}

gameLoop();

function loop() {
    if (game.status) {
        if (!p.moveImpossible(0, 1, p.activeTetromino)) {
            background.play();
            p.moveDown();
        } else {
            shapeCrash.play();
            p.block();
            p = randomShape();
        }
    } else {
        background.stop();
        gameOver.play();
        alert('Game Over! Press Space to replay');
        clearInterval(interval);
        // document.getElementById('result').innerHTML = result;
    }
}
// function replay(){
//         location.reload();
// }
// function drawGame() {
//     if (game.status) {
//         if (!p.moveImpossible(0, 1, p.activeTetromino)) {
//             gainCoin.play();
//             p.moveDown();
//         } else {
//             p.block();
//             p = randomShape();
//         }
//         let drawAnimation;
//         drawAnimation = requestAnimationFrame(drawGame);
//     }
//    else {
//        gainCoin.stop();
//        cancelAnimationFrame(drawAnimation);
//     }
// }


// moveDown();
// function startGame() {
//     game.drawBoard();
//     if (game.status) {
//         gainCoin.play();
//         moveGame();
//     } else {
//         console.log(game.status);
//         gainCoin.stop();
//         endGame();
//     }
// }
//
// function moveGame() {
//     if (!p.moveImpossible(0, 1, p.activeTetromino)) {
//         // gainCoin.play();
//         p.moveDown();
//     } else {
//         p.block();
//         p = randomShape();
//     }
//     let drawAnimation;
//     drawAnimation = requestAnimationFrame(moveGame);
// }
//
// function endGame() {
//     gainCoin.stop();
//     cancelAnimationFrame(drawAnimation)
// }

document.addEventListener('keydown', function (evt) {
    if ((evt.keyCode === 37) && (!p.moveImpossible(-1, 0, p.activeTetromino))) {
        move.play();
        p.moveLeft();
    } else if ((evt.keyCode === 39) && (!p.moveImpossible(1, 0, p.activeTetromino))) {
        move.play();
        p.moveRight();
    } else if ((evt.keyCode === 38)) {
        move.play();
        p.rotate();
    } else if ((evt.keyCode === 40) && (!p.moveImpossible(0, 1, p.activeTetromino))) {
        move.play();
        p.moveDown();

    }
    else if (evt.keyCode === 32) {
        location.reload();
    }
})
