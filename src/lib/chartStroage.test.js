/**
* @jest-environment jsdom
*/

//Function Gathering
const chartStorage = require('./chartStorage')
const saveChart = chartStorage["saveChart"]
const loadAllSavedCharts = chartStorage["loadAllSavedCharts"]
const loadSavedChart = chartStorage["loadSavedChart"]
const updateCurrentChartData = chartStorage["updateCurrentChartData"]
const loadCurrentChartData = chartStorage["loadCurrentChartData"]



//Chart data that will be used in testing
var chart1 = {
    "type":"line",
    "data":[{"x":"1","y":"1"},{"x":"2","y":"2"}],
    "xLabel":"X",
    "yLabel":"Y",
    "title":"Test",
    "color":"#ff4500"
}

var chart2 = {
    "type":"line",
    "data":[{"x":"1","y":"1"},{"x":"2","y":"2"},{"x":"3","y":"3"}],
    "xLabel":"X",
    "yLabel":"Y",
    "title":"Test2",
    "color":"#ff4500"
}



//Function Test: loadSavedChart()
test("Test that loading a saved chart returns the correct JSON output", function() {
    window.localStorage.setItem("savedCharts", JSON.stringify([chart1]))    //Place chart1 in localStorage savedCharts

    expect(loadSavedChart(0)).toStrictEqual(chart1)     //Only one graph is in the savedCharts
})

//Function Test: loadAllSavedChart()
test("Test that calling loadAllSavedCharts returns all saved charts", function() {
    window.localStorage.setItem("savedCharts", JSON.stringify([chart1, chart2]))    //Place both chart1 and chart2 in localStorage savedCharts
    
    var charts = loadAllSavedCharts()   //Call function -- returns array of all saved charts

    var returnChart1 = charts[0]
    var returnChart2 = charts[1]

    expect(returnChart1).toStrictEqual(chart1)
    expect(returnChart2).toStrictEqual(chart2)
})

//Function Test: saveChart()
test("Test that saveChart saves a given chart to local storage", function() {
    saveChart(chart1, 0)

    var savedChart = JSON.parse(window.localStorage.getItem("savedCharts"))[0]  //Retrieve the chart that was saved

    expect(savedChart).toStrictEqual(chart1)

})

//Function Test: updateCurrentChartData()
test("Test that updateCurrentChartData correctly set the data for the current chart", function() {
    window.localStorage.setItem("currentChartData", JSON.stringify(chart1)) //Place chart1

    updateCurrentChartData(chart2)  //Update with data from chart2

    var chart = JSON.parse(window.localStorage.getItem("currentChartData")) //Retrieve the current chart

    expect(chart).toStrictEqual(chart2)
})

//Function Test: loadCurrentChartData()
test("Test that loadCurrentChartData correctly returns the data for the current chart", function() {
    window.localStorage.setItem("currentChartData", JSON.stringify(chart1)) //Place chart1

    var chart = loadCurrentChartData()      //Get the current chart

    expect(chart).toStrictEqual(chart1)
})