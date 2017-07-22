(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getTeamLocation = (name) => {
        return airtableHelper.getFirstValueWhere(
            process.env.AIRTABLE_PEOPLE_ID,
            'Teams',
            'name',
            name,
            'Location'
        );
    }

})();