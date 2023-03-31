const app = require('../app.js')

test('should equal 5 when passed 2 and 3', ( ) => { 
    expect(app.add(2,3)).toBe(5);
    });

test('should be true', ( ) => { 
    expect(app.truthTest("Testing")).not.toBeNull;
    expect(app.truthTest("Testing")).not.toBeFalsy;
    expect(app.truthTest("Testing")).toBeTruthy;
   });

test('should be equal', ( ) => { 
    expect(app.carBuilder(car)).toEqual({colour: "Red", fuelType: "Gas"});
   });

test('should be outputting 6+ letter outputs', ( ) => { 
    for (const element of app.lengthChecker(outputVal)) {
    expect(element.length).toBeGreaterThanOrEqual(6);
    }});

test('should be string output', ( ) => {
    expect(typeof app.numb2str(6)).toBe("string")
})

test('should be Earth', ( ) => {
    expect(app.planetChecker(3)).toEqual("Earth")
})

test('should be 4', ( ) => {
    expect(app.studentCount([true, true, true, false, true])).toEqual(4)
})

test('should be 916', ( ) => {
    expect(app.squareFunct(34)).toEqual(916)
})

test('should be 17', ( ) => {
    expect(app.yrCent(1705)).toEqual(17)
})

test('should be 17', ( ) => {
    expect(app.binaryConvert([0, 1, 0, 0])).toEqual(4)
})

//    There are lots of 
//    Unit Testing matcher functions. Here’s a few common ones: 
//    .toBe( ) 
//    .toHaveLength( ) 
//    .toEqual( ) 
//    .toContain( ) 
//    .toBeDefined( ) 
//    .toHaveBeenCalled( ) 
//    We can even add .not to our matcher functions 
//    .not.toBe( )