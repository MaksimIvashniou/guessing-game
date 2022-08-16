class GuessingGame {
    minRange = 0;
    maxRange = 0;
    number = 0;

    constructor() { }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.number = Math.round((this.minRange + this.maxRange) / 2);
        return this.number;
    }

    lower() {
        this.maxRange = this.number;
    }

    greater() {
        this.minRange = this.number;
    }
}

module.exports = GuessingGame;
