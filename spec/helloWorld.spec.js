const assert = require("assert");
const helloWorld = require("../helloWorld.js");

describe("helloWorld()", function() {
  //act
  let greeting = "Hello World";
  //arrange
  let result = helloWorld();
  //assert
  it("it should return Hello World", function() {
    expect(result).toEqual(greeting);
  });

  it("Here I am first testing if helloWorld is returning the sentence helloWord", function() {
    expect("Hello World").toEqual(helloWorld());
  });
});
