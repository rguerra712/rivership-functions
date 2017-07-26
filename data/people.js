(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getPersonLocation = (name) => {
        return new Promise((resolve, reject) => {
            let tableId = process.env.AIRTABLE_PEOPLE_ID;
            let getTeam = airtableHelper.getFirstFieldsWhere(
                tableId,
                'Teams',
                'People',
                name
            );
            let getPersonName = airtableHelper.getFirstValueWhere(
                tableId,
                'People',
                'Name',
                name,
                'Name'
            );
            getTeam.then(fields => {
                    getPersonName.then(personName => {
                            if (fields.Name && fields.Location) {
                                resolve(`${personName} is on team ${fields.Name} located at ${fields.Location}`)
                            } else {
                                reject(`invalid fields ${fields}`);
                            }
                        })
                        .catch(error => reject(error))
                })
                .catch(error => reject(error));
        });
    }

})();