var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
	beerName: String,
	IBU: {type: Number, default: 0},
	// reference post that beer is from
	post: {type: mongoose.Schema.Types.ObjectId, ref: 'BeerList'}
});

var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;