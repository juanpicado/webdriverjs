describe('getLocation', function() {

    before(h.setup());

    it('should return the location of a single element', function(done) {
        this.client
            .getLocation('header h1', function(err, location) {
                assert.equal(err, null);
                location.x.should.be.exactly(8);
                location.y.should.be.exactly(20);
            })
            .call(done);
    });

    it('should return the location of multiple elements', function(done) {
        this.client
            .getLocation('.box', function(err, locations) {
                assert.equal(err, null);
                locations.should.be.an.instanceOf(Array);
                locations.should.have.length(5);

                locations.forEach(function(location) {
                    location.x.should.be.type('number');
                    location.y.should.be.type('number');
                })
            })
            .call(done);
    });

});