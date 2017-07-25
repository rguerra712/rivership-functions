const lunch = require('../data/lunch')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('lunch per day', () => {
        it('should have lunch for Sunday', () => {
            return lunch.getLunch('Sunday')
                .then(result => {
                    expect(result.toLowerCase()).to.contain('no lunch');
                })
                .catch(error => { throw Error(error); });
        })
    })
})();