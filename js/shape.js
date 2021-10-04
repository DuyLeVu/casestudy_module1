class Shape {

    constructor(game, tetromino, color) {
        this.game = game;
        this.tetromino = tetromino;
        this.color = color;
        this.tetrominoIndex = 0;
        this.activeTetromino = this.tetromino[this.tetrominoIndex];
        this.x = 3;
        this.y = -2;
    }

    fill(color) {
        for (let i = 0; i < this.activeTetromino.length; i++) {
            for (let j = 0; j < this.activeTetromino.length; j++) {
                if (this.activeTetromino[i][j]) {
                    this.game.drawSquare(this.x + j, this.y + i, color);
                }
            }
        }
    }

    draw() {
        this.fill(this.color);
    }

    unDraw() {
        this.fill(this.game.color);
    }

    moveDown() {
        this.unDraw();
        this.y++;
        this.draw();
    }

    moveLeft() {
        // if (!this.moveImpossible(-1, 0, this.activeTetromino)) {

        this.unDraw();
        this.x--;
        this.draw();

        // }
    }

    moveRight() {
        // if (!this.moveImpossible(1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x++;
        this.draw();
    }

    moveImpossible(x, y, shape) {
        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape.length; j++) {
                if (!shape[i][j]) {
                    continue;
                }
                let newX = this.x + j + x;
                let newY = this.y + i + y;
                // console.log(newX, newY);
                if (newX < 0 || newX >= this.game.gameCol || newY >= this.game.gameRow) {
                    return true;
                }
                if (newY < 0) {
                    continue;
                }
                if (this.game.board[newY][newX] !== this.game.color) {
                    return true;
                }
            }
        }
        return false;
    }

    block() {
        // shapeCrash.play();
        for (let i = 0; i < this.activeTetromino.length; i++) {
            for (let j = 0; j < this.activeTetromino.length; j++) {
                if (!this.activeTetromino[i][j]) {
                    continue;
                }

                if (this.y + i < 0) {
                    // alert('Game Over');
                    this.game.status = false;
                    // this.game.status = false;
                    // console.log(this.game.status);
                    break;
                }
                this.game.board[this.y + i][this.x + j] = this.color;
            }
        }

        for (let i = 0; i < this.game.gameRow; i++) {
            let isFull = true;
            for (let j = 0; j < this.game.gameCol; j++) {
                isFull = isFull && (this.game.board[i][j] !== this.game.color);
            }

            if (isFull) {
                for (let y = i; y > 1; y--) {
                    for (let j = 0; j < this.game.gameCol; j++) {
                        this.game.board[y][j] = this.game.board[y - 1][j];
                    }
                }
                for (let j = 0; j < this.game.gameCol; j++) {
                    this.game.board[0][j] = this.game.color;
                }
                this.game.score += 10;
                gameVictory.play();

            }
        }
        this.game.drawBoard();
        document.getElementById('score').innerHTML = this.game.score;
    }


    rotate() {
        let nextTetromino = this.tetromino[(this.tetrominoIndex + 1) % this.tetromino.length];
        let move = 0;
        if (this.moveImpossible(0, 0, nextTetromino)) {
            if (this.x > this.game.gameCol / 2) {
                move = -1;
            } else if (this.x < this.game.gameCol / 2)
                move = 1;
        }

        if (!this.moveImpossible(0, 0, nextTetromino)) {
            this.unDraw();
            this.x += move;
            this.tetrominoIndex = (this.tetrominoIndex + 1) % this.tetromino.length;
            this.activeTetromino = this.tetromino[this.tetrominoIndex];
            this.draw();
            gainCoin.loop();
        }

    }
}
