const generateChartImg = require("./generateChartImg");

// Successful chart generation
test("generateChartImg generates an image with all parameters", async () => {
	const type = "line";
	const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "red";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});
