const generateChartImg = require("./generateChartImg");

// Successful chart generation for each chart type
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
	const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "red";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});

test("generateChartImg generates an image with all parameters (Bar)", async () => {
	const type = "bar";
	const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
	const xLabel = "X Axis";
	const yLabel = "Y Axis";
	const title = "Test Chart";
	const color = "red";

	await expect(generateChartImg(type, data, xLabel, yLabel, title, color)).resolves.toBeDefined();
});

// Unsuccessful chart generation
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

test("generateChartImg does not have x label (Line)", async () => {
	const type = "line"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = "X Axis";
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not have y label (Line)", async () => {
	const type = "line"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = undefined;
	const yLabel = "Y Axis";

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not y label (Line)", async () => {
	const type = "line";
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

test("generateChartImg does not have both x and y labels (Scatter)", async () => {
	const type = "scatter"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = undefined;
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not have x label (Scatter)", async () => {
	const type = "scatter"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = "X Axis";
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not have y label (Scatter)", async () => {
	const type = "scatter"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = undefined;
	const yLabel = "Y Axis";

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not y label (Scatter)", async () => {
	const type = "scatter";
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

test("generateChartImg does not have both x and y labels (Bar)", async () => {
	const type = "bar"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = undefined;
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not have x label (Bar)", async () => {
	const type = "bar"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = "X Axis";
	const yLabel = undefined;

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not have y label (Bar)", async () => {
	const type = "bar"; 
	const data = [{ x: 1, y: 2 }];
	const xLabel = undefined;
	const yLabel = "Y Axis";

	try {
		await generateChartImg(type, data, xLabel, yLabel);
	} catch (error) {
		expect(error).toContain("400 Bad Request");
		expect(error).toContain("Error: Must specify a label for both X and Y!");
	}
});

test("generateChartImg does not y label (Bar)", async () => {
	const type = "bar"; 
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
