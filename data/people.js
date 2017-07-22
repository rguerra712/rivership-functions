(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getPersonLocation = (name, onSuccess) => {
        return new Promise((resolve, reject) => {
            let tableId = process.env.AIRTABLE_PEOPLE_ID;
            let getPersonName = airtableHelper.getFirstValueWhere(
                tableId,
                'People',
                'name',
                name,
                'Name'
            );
            let getPersonTeam = airtableHelper.getFirstValueWhere(
                tableId,
                'People',
                'name',
                name,
                'Team'
            );
            let getTeam = teamId => airtableHelper.getById(
                tableId,
                'Teams',
                teamId,
                'Location'
            );
            getPersonName.then(personName => {
                    getPersonTeam.then(teamId => {
                            getTeam(teamId).then(location => {
                                    resolve(`${personName} is ${location}`)
                                })
                                .catch(error => reject(error))
                        })
                        .catch(error => reject(error))
                })
                .catch(error => reject(error));
        });
    }

})();