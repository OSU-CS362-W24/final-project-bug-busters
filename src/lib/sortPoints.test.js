const sortPoints = require("./sortPoints")

test("sortPoints unit test for valid array of points", function() {
    const preSort = [
        { x: 3, y: 5},
        { x: 1, y: 8},
        { x: 2, y: 4}
    ]

    const postSort = [
        { x: 1, y: 8},
        { x: 2, y: 4},
        { x: 3, y: 5}
    ]

    const sort = sortPoints(preSort)
    expect(sort).toEqual(postSort)
})

test("sortPoints unit test for valid array of points", function() {
    const preSort = [
        { x: 10, y: 5},
        { x: 1, y: 8},
        { x: 2, y: 4},
        { x: 9, y: 2},
        { x: 5, y: 3},
        { x: 3, y: 5}
    ]

    const postSort = [
        { x: 1, y: 8},
        { x: 2, y: 4},
        { x: 3, y: 5},
        { x: 5, y: 3},
        { x: 9, y: 2},
        { x: 10, y: 5}
    ]

    const sort = sortPoints(preSort)
    expect(sort).toEqual(postSort)
})

test("sortPoints unit test for valid array of points (empty array)", function() {
    const sort = sortPoints([])
    expect(sort).toEqual([])
})