class SpotBase {
    constructor (color, id) {
        if (new.target === SpotBase) {
            throw new Error("Cannot instantiate abstract class SpotBase")
        }
        this.color = color
        this.id = id
    }
    isOccupied() {}
}

class PieceBase {
    constructor (color, type) {
        if (new.target === SpotBase) {
            throw new Error("Cannot instantiate abstract class SpotBase")
        }
        this.color = color
        this.type = type
    }
    makeMove() {}
}

class Board {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }

  displayBoard() {
    // Implement logic to display the current state of the game board
    throw new Error("displayBoard method must be implemented in a concrete class");
  }

  makeMove(row, col, player) {
    // Implement logic to make a move on the game board
    throw new Error("makeMove method must be implemented in a concrete class");
  }

  checkWin(player) {
    // Implement logic to check if the given player has won the game
    throw new Error("checkWin method must be implemented in a concrete class");
  }

  checkDraw() {
    // Implement logic to check if the game is a draw
    throw new Error("checkDraw method must be implemented in a concrete class");
  }
}

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  makeMove(board) {
    // Implement logic for the player to make a move on the game board
    throw new Error("makeMove method must be implemented in a concrete class");
  }
}