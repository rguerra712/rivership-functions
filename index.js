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
            day = getDayOfWeekForToday();
        } else if (day.toString().toLowerCase().indexOf('tomorrow') >= 0) {
            day = getDayOfWeekForTomorrow();
        }
        return lunch.getLunch(day);
    };

    let getDayOfWeekForToday = () => {
        return getDayOfWeek(new Date().getDay());
    }

    let getDayOfWeekForTomorrow = () => {
        let day = new Date().getDay() + 1;
        day = day % 7; // in case of Saturday
        return getDayOfWeek(day);
    }

    let getDayOfWeek = day => {
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[day];
    }
})();