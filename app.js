const express = require("express");
var bodyParser = require("body-parser");

const random = require("./util/random");
const countingSort = require("./util/sort/counting");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	return res.json({ hello: "rota teste" });
});

app.post("/bubble", async (req, res) => {
	try {
		const { value } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		const arr = random(value);
		var initial = Date.now();
		const array = countingSort(arr[0], value);
		var final = Date.now();

		return res.json({ time: final - initial, array }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
