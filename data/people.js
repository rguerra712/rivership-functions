(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getPersonLocation = (name, onSuccess) => {
        return new Promise((resolve, reject) => {
            let getPersonName = airtableHelper.getFirstValueWhere(
                process.env.AIRTABLE_PEOPLE_ID,
                'People',
                'name',
                name,
                'Name'
            );
            let getPersonTeam = airtableHelper.getFirstValueWhere(
                process.env.AIRTABLE_PEOPLE_ID,
                'People',
                'name',
                name,
                'Team'
            );
            let getTeam = teamId => airtableHelper.getById(
                process.env.AIRTABLE_TEAM_ID,
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