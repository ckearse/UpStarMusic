/** @format */

const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */

module.exports = () => {
	const minYearActiveQuery = Artist.find()
		.sort({ yearsActive: 1 })
		.limit(1)
		.then((users) => users[0].yearsActive);

	const maxYearActiveQuery = Artist.find()
		.sort({ yearsActive: -1 })
		.limit(1)
		.then((users) => users[0].yearsActive);

	Promise.all([minYearActiveQuery, maxYearActiveQuery]).then((Result) => {
		return { min: Result[0], max: Result[1] };
	});
};
