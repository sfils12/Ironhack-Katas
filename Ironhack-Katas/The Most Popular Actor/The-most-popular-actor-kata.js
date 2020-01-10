// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor

function mostPopularActor(actors) {
	let highestScore = actors[0].popularityScore;
	let actorsName;

	for (let i = 0; i < actors.length; i++) {
		if (actors[i].popularityScore > highestScore) {
			highestScore = actors[i].popularityScore;
			actorsName = actors[i].name;
		}
	}
	return actorsName;
}

var americanActors = [
	{
		name: 'Tom Hanks',
		popularityScore: 87
	},
	{
		name: 'Natalie Portman',
		popularityScore: 90
	},
	{
		name: 'Jack Nicholson',
		popularityScore: 98
	},
	{
		name: 'Julia Roberts',
		popularityScore: 88
	}
];
// console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"

mostPopularActor(americanActors);
