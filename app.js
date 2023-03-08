const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const random = require("./util/random");
const countingSort = require("./util/sort/selection");
const bubbleSort = require("./util/sort/bubble");
const radixSort = require("./util/sort/radix");
const binary = require("./util/search/binary");
const linear = require("./util/search/linear");
const selectionSort = require("./util/sort/selection");

const app = express();
const port = 2020;

app.use(bodyParser.json());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
	res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	app.use(cors());
	next();
});
app.get("/", (req, res) => {
	return res.send(
		"<h1>API de cálculo de tempo de execução dos seguintes algoritmos:" +
		"</h1 > <h1>Counting Sort, Radix Sort, Bubble Sort, Binary Search e Linear Search</h1>"
	);
});

//Rotas para algoritmos de Sorting
app.post("/selection", async (req, res) => {
	try {
		const { value } = req.body;
		if (value < 10000 || value > 1000000)
			return res.json({ valueErr: "Out of range value" }).status(500);
		const arr = random(value);

		var initial = Date.now();
		const array = selectionSort(arr);
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
			return res.json({ valueErr: "Out of range value" }).status(500);
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
			return res.json({ valueErr: "Out of range value" }).status(500);
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
			return res.json({ valueErr: "Out of range value" }).status(500);
		if (target < 20 || target > 2000000)
			return res.json({ valueErr: "Out of range target" }).status(500);
		const arr = random(value);
		const sortedArray = radixSort(arr);


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
			return res.json({ valueErr: "Out of range value" }).status(500);
		if (target < 20 || target > 2000000)
			return res.json({ valueErr: "Out of range target" }).status(500);

		const arr = random(value);
		const sortedArray = radixSort(arr);


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
	console.log(`Rodando em http://localhost:${port}`);
});
