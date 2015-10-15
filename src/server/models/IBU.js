var mongoose = require('mongoose');

var beerListSchema = new mongoose.Schema({
	beerStyle: String,
	IBU: {type: Number, default: 0},
	list: {type: mongoose.Schema.Types.ObjectId, ref: 'Beer'}
});

var BeerList = mongoose.model('BeerList', beerListSchema);

module.exports = BeerList;

