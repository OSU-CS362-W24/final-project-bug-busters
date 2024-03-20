const generateChartImg = require("./generateChartImg");

// Successful chart generation for each chart type.
test("generateChartImg generates an image with all parameters (Line)", async () => {
	const type = "line";
	const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "red";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});

test("generateChartImg generates an image with all parameters (Scatter)", async () => {
	const type = "scatter";
	const data = [{ x: 1, y: 5 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "blue";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});

test("generateChartImg generates an image with all parameters (Bar)", async () => {
	const type = "bar";
	const data = [{ x: 1, y: 3 }, { x: 2, y: 2 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "green";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});

// Unsuccessful chart generation (not required, but its pretty simple). This also proves the 
// above tests are actually successful.
test("generateChartImg does not have both x and y labels (Line)", async () => {
	const type = "line"; 
	const data = [{ x: 1, y: 2 }];
	// Omitting labels intentionally to trigger an error
	const xLabel = undefined;
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not y label (Bar)", async () => {
	const type = "bar";
	// Omitting data to trigger error
	const data = [{}];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: No data specified!");
	}
});
