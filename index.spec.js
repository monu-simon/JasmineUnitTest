
describe('calculator',() => {  

    let c;
    beforeEach(function() {
        c= new Calculator();
    })

    it('adds the number to the total',() => {
        c.add(5); 
        expect(c.total).toBe(5);
    })

    it('substracts the number from the total',() => {
        c.substract(1);
        expect(c.total).toBe(-1)
    })
    it('multiple the number to the total',() => {
        c.multiply(4);
        expect(c.total).toBe(0)
    })
    it('divides the number to the total',() => {
        c.divide(12);
        expect(c.total).toBe(0)
    })
})