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
class Move {
    constructor(fromX, fromY, toX, toY) {
      this.fromX = fromX;
      this.fromY = fromY;
      this.toX = toX;
      this.toY = toY;
      this.isCastling = false; // Flag for castling move (optional)
      this.capturedPiece = null; // Piece captured in this move (optional)
      this.promotionPiece = null; // Piece to promote pawn to (optional)
    }
  
    toString() {
      // Implement logic to represent the move in standard notation (e.g., e4, Nf3)
      return `(${this.fromX}, ${this.fromY}) -> (${this.toX}, ${this.toY})`;
    }
  }
  
  class Game {
    constructor(board) {
      this.board = board; // Chess board object representing the game state
      this.currentPlayer = 'white'; // Current player (white or black)
      this.moveHistory = []; // Array of moves played in the game
    }
  
    makeMove(move) {
      // Validate move (check if legal based on piece type, board state, etc.)
      // Update board state based on the move
      // Update current player
      // Add move to history
      // Handle special moves like castling, en passant, pawn promotion (if applicable)
    }
  
    isGameOver() {
      // Check for checkmate, stalemate, or other game-ending conditions
      return false; // Implement logic to check for game over
    }
  
    getWinner() {
      if (this.isGameOver()) {
        return this.currentPlayer === 'white' ? 'black' : 'white'; // Winner is the opponent of the last player
      }
      return null;
    }
  }
