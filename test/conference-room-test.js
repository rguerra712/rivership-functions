const conferenceRoom = require('../data/conference-room')
const chai = require('chai');
const expect = chai.expect;

(function() {
    'use strict';

    describe('should give location from room name', () => {
        it('should have location for Austin', () => {
            return conferenceRoom.getRoomByName('Austin')
                .then(result => {
                    expect(result).to.contain('second floor');
                })
                .catch(error => { throw Error(error); });
        })
    })
})();