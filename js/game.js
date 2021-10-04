class Game {
    constructor(ctx, side, gameCol, gameRow, color) {
        this.gameCol = gameCol;
        this.gameRow = gameRow;
        this.side = side;
        this.ctx = ctx
        this.board = [];
        this.color = color;
        this.status = true;
        this.score = 0;
    }

    drawSquare(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.side, y * this.side, this.side, this.side);

        this.ctx.strokeStyle = '#DDDDDD';
        this.ctx.strokeRect(x * this.side, y * this.side, this.side, this.side);
    }

    setBoard() {
        for (let i = 0; i < this.gameRow; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.gameCol; j++) {
                this.board[i][j] = this.color;
            }
        }
    }
    //
    getBoard() {
        this.setBoard();
        return this.board;
    }
    drawBoard() {
        for (let i = 0; i < this.gameRow; i++) {
            for (let j = 0; j < this.gameCol; j++) {
                this.drawSquare(j, i, this.board[i][j]);
            }
        }
    }
}


