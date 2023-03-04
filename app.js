const express = require("express");
var bodyParser = require("body-parser");

const random = require("./util/random");
const countingSort = require("./util/sort/counting");
const bubbleSort = require("./util/sort/bubble");
const radixSort = require("./util/sort/radix");
const binary = require("./util/search/binary");
const linear = require("./util/search/linear");

const app = express();
const port = 2020;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	return res.json({ hello: "rota teste" });
});

//Rotas para algoritmos de Sorting
app.post("/counting", async (req, res) => {
	try {
		const { value } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		const arr = random(value);

		var initial = Date.now();
		const array = countingSort(arr, value);
		var final = Date.now();

		return res.json({ time: final - initial, array }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});
app.post("/bubble", async (req, res) => {
	try {
		const { value } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		const arr = random(value);

		var initial = Date.now();
		const array = bubbleSort(arr);
		var final = Date.now();

		return res.json({ time: final - initial, array }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});

app.post("/radix", async (req, res) => {
	try {
		const { value } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		const arr = random(value);

		var initial = Date.now();
		const array = radixSort(arr);
		var final = Date.now();

		return res.json({ time: final - initial, array }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});

//Rotas para algoritmos de Search
app.post("/binary", async (req, res) => {
	try {
		const { value, target } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		if (target < 20 || target > 2000000)
			return res.json({ valueErr: "Out of range target" });

		const arr = random(value);
		const sortedArray = countingSort(arr, value);

		var initial = Date.now();
		const index = binary(sortedArray, target);
		var final = Date.now();

		return res.json({ time: final - initial, index, sortedArray }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});

app.post("/linear", async (req, res) => {
	try {
		const { value, target } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" });
		if (target < 20 || target > 2000000)
			return res.json({ valueErr: "Out of range target" });

		const arr = random(value);
		const sortedArray = countingSort(arr, value);
		var initial = Date.now();
		const index = linear(sortedArray, target);
		var final = Date.now();

		return res.json({ time: final - initial, index, sortedArray }).status(200);
	} catch (err) {
		console.error(err);
		return res.json(err).status(500);
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
