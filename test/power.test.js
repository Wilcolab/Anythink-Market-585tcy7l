describe('Power', function () {
    it('raises a positive integer to a positive integer', function (done) {
        request.get('/arithmetic?operation=power&operand1=2&operand2=3')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.eql({ result: 8 });
                done();
            });
    });

    it('handles negative exponents', function (done) {
        request.get('/arithmetic?operation=power&operand1=2&operand2=-3')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.eql({ result: Math.pow(2, -3) });
                done();
            });
    });

    it('handles zero exponent', function (done) {
        request.get('/arithmetic?operation=power&operand1=5&operand2=0')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.eql({ result: 1 });
                done();
            });
    });

    it('handles negative base with odd exponent', function (done) {
        request.get('/arithmetic?operation=power&operand1=-2&operand2=3')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.eql({ result: -8 });
                done();
            });
    });
});

// Test cases description (for Copilot/autocomplete):
// - Test that the `power` operation returns correct results for integer inputs.
// - Test negative exponents produce fractional results.
// - Test zero exponent yields 1.
// - Test negative base with odd/even exponents behave correctly.
