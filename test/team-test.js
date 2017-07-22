const lunch = require('../data/team')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('starship', () => {
        it('should have enterprise', () => {
            return lunch.getTeamLocation('starship')
                .then(result => {
                    expect(result).to.contain('enterprise');
                })
                .catch(error => { throw Error(error); });
        })
    })
})();