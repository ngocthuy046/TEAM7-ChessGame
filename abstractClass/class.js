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