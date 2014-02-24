exports.index = function(req, res) {
	res.send("Welcome to CS 1501");
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.bootstrap = function(req, res) {
	res.render('bootstrap101', function(err, html) {
		res.send(html);
	})
}

exports.watch = watchf;