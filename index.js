(function() {
    'use strict';

    const conferenceRoom = require('./data/conference-room');
    const team = require('./data/team');
    const people = require('./data/people');
    const lunch = require('./data/lunch');

    exports.whereIs = (something) => {
        return new Promise((resolve, reject) => {
            conferenceRoom.getRoomByName(something)
                .then(result => resolve(result))
                .catch(errorConferenceRoom => {
                    team.getTeamLocation(something)
                        .then(result => resolve(result))
                        .catch(errorTeam => {
                            people.getPersonLocation(something)
                                .then(result => resolve(result))
                                .catch(errorPerson => {
                                    reject({
                                        errorConferenceRoom: errorConferenceRoom,
                                        errorTeam: errorTeam,
                                        errorPerson: errorPerson
                                    })
                                })
                        })
                })
        })
    };

    exports.whatIsLunch = (day) => {
        if (!day) {
            let today = new Date();
            day = getDayOfWeek(today);
        }
        return lunch.getLunch(day);
    };

    let getDayOfWeek = date => {
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[date.getDay()];
    }
})();