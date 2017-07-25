const index = require('../index')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('where is?', () => {
        it('should have location for Austin', () => {
            return index.whereIs('Austin')
                .then(result => {
                    expect(result).to.contain('second floor');
                })
                .catch(error => { throw Error(error); });
        })

        it('should have enterprise for starship', () => {
            return index.whereIs('starship')
                .then(result => {
                    expect(result).to.contain('enterprise');
                })
                .catch(error => { throw Error(error); });
        })

        it('should have guerra', () => {
            return index.whereIs('stephen')
                .then(result => {
                    expect(result).to.contain('guerra');
                })
                .catch(error => { throw Error(error); });
        })
    })

    describe('lunch today?', () => {
        it('should have something for lunch', () => {
            return index.whatIsLunch('tomorrow')
                .then(result => {
                    expect(result).to.not.equal(undefined);
                })
                .catch(error => { throw Error(error); });
        })
    })
})();