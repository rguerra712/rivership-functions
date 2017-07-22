const lunch = require('../data/people')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('stephen', () => {
        it('should have guerra', () => {
            return lunch.getPersonLocation('stephen')
                .then(result => {
                    expect(result).to.contain('guerra');
                })
                .catch(error => { throw Error(error); });
        })
        it('should have enterprise', () => {
            return lunch.getPersonLocation('stephen')
                .then(result => {
                    expect(result).to.contain('enterprise');
                })
                .catch(error => { throw Error(error); });
        })
    })
})();