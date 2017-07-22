(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getTeamLocation = (name, onSuccess) => {
        return airtableHelper.getFirstValueWhere(
            process.env.AIRTABLE_TEAM_ID,
            'Teams',
            'name',
            name,
            'Location'
        );
    }

})();