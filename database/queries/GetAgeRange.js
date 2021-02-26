/** @format */

const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */

module.exports = () => {
	const minAgeQuery = Artist.find()
		.sort({ age: 1 })
		.limit(1)
		.then((users) => users[0].age);

	const maxAgeQuery = Artist.find()
		.sort({ age: -1 })
		.limit(1)
		.then((users) => users[0].age);

	Promise.all([minAgeQuery, maxAgeQuery]).then((Result) => {
		console.log('Age Range: ', { min: Result[0], max: Result[1] });
		return { min: Result[0], max: Result[1] };
	});
};
