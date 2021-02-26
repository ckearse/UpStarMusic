/** @format */

const Artist = require('../models/artist');

/**
 * Adds a single artist to the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
/* module.exports = (artistProps) => {
	return new Artist({
		name: artistProps.name,
		age: artistProps.age,
		yearsActive: artistProps.yearsActive,
		genre: artistProps.genre,
	}).save();
}; */
module.exports = (artistProps) => new Artist(artistProps).save();
