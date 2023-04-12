function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(number) {
    this.total += number;
}

Calculator.prototype.substract = function(number) {
    this.total -= number;
}

Calculator.prototype.multiply = function(number) {
    this.total *= number;
}

Calculator.prototype.divide = function(number) {
    this.total /= number;
}