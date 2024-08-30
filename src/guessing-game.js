class GuessingGame {
    constructor() {
        this.array = [];
        this.start = 0;
        this.end = null;
        this.mid = null;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i += 1) {
            this.array.push(i);
        }
        this.end = this.array.length - 1;
    }

    guess() {
        this.mid =  Math.round((this.start + this.end) / 2);
        return this.array[this.mid];
    }

    lower() {
        this.end = this.mid;
    }

    greater() {
        this.start = this.mid;
    }
}

module.exports = GuessingGame;
