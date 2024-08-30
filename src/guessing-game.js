class GuessingGame {
    constructor() {
        this.array = [];
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.array.push(i);
        }
        return this.array;
    }

    guess() {
        const middle = Math.floor((min + max) / 2);
        return this.array[middle];
    }

    lower() {
        this.array = this.array.slice(0, Math.floor((min + max) / 2));
        return this.guess();
    }

    greater() {
        this.array = this.array.slice(Math.floor((min + max) / 2));
        return this.guess();
    }
}

module.exports = GuessingGame;
