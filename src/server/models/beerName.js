var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
	beerName: String,
	IBU: {type: Number, default: 0}
});

var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;