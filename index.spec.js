describe('calculator',() => {
    it('adds the number to the total',() => {
        const c = new Calculator();
        c.add(5); 
        expect(c.total).toBe(5);
    })

    it('substracts the number from the total',() => {
        const c = new Calculator();
        c.substract(1);
        expect(c.total).toBe(-1)
    })
    it('multiple the number to the total',() => {
        const c = new Calculator();
        c.multiply(4);
        expect(c.total).toBe(0)
    })
    it('divides the number to the total',() => {
        const c = new Calculator();
        c.divide(12);
        expect(c.total).toBe(0)
    })
})