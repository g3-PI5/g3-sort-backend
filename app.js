const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	var date = Date.now();
	var aux = 0;
	for (let i = 0; i < 1000000; i++) {
		aux++;
	}
	var final = Date.now();
	return res.json({ time: final - date });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
