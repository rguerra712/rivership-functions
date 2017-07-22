(function() {
    'use strict';

    const airtableHelper = require('./airtableHelper');

    exports.getLunch = (day) => {
        return airtableHelper.getFirstValueWhere(
            process.env.AIRTABLE_LUNCH_ID,
            'Lunch',
            'DayOfWeek',
            day,
            'Menu'
        );
    }

})();