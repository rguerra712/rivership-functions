(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getRoomByName = (name) => {
        return airtableHelper.getFirstValueWhere(
            process.env.AIRTABLE_CONFERENCEROOMS_ID,
            'ConferenceRooms',
            'Name',
            name,
            'Location'
        );
    }

})();