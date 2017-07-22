(function() {
    'use strict';
    const request = require('request');

    /**
     * Gets the first value that matches a criteria for a table with ID and name
     */
    exports.getFirstValueWhere = (tableId, tableName, whereField, whereLike, columnSought) => {
        let query = `filterByFormula=Find(Lower("${whereLike}"), Lower({${whereField}}))`;
        let url = `https://api.airtable.com/v0/${tableId}/${tableName}?${query}`;
        let options = {
            url: url,
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`
            }
        };

        return new Promise((resolve, reject) => {
            request.get(options, (err, resp, body) => {
                if (err) {
                    reject(err);
                } else {
                    let response = JSON.parse(body);
                    if (!response) {
                        reject('Response is undefined');
                        return;
                    }
                    if (response.error) {
                        reject(`Error response: ${response.error}`);
                        return;
                    }
                    if (!response.records || !response.records[0] || !response.records[0].fields) {
                        reject(`No response, instead found: ${response}`);
                        return;
                    }
                    resolve(response.records[0].fields[columnSought]);
                }
            })
        });
    };

    exports.getById = (tableId, tableName, id, columnSought) => {
        let url = `https://api.airtable.com/v0/${tableId}/${tableName}/${id}`;
        let options = {
            url: url,
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`
            }
        };

        return new Promise((resolve, reject) => {
            request.get(options, (err, resp, body) => {
                if (err) {
                    reject(err);
                } else {
                    let response = JSON.parse(body);
                    if (!response) {
                        reject('Response is undefined');
                        return;
                    }
                    if (response.error) {
                        reject(`Error response: ${response.error}`);
                        return;
                    }
                    if (!response.fields) {
                        reject(`No response fields, instead found: ${response}`);
                        return;
                    }
                    resolve(response.fields[columnSought]);
                }
            })
        });
    };

})();