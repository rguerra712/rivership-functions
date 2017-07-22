const lunch = require('../data/lunch')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('lunch per day', () => {
        it('should have lunch for Monday', () => {
            return lunch.getLunch('Monday')
                .then(result => {
                    expect(result).to.contain('down');
                })
                .catch(error => { throw Error(error); });
        })
    })
})();