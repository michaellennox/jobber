"use strict";

describe("Companies index page", function(){
  var page,
      indexPage;

  beforeEach(function(){
    indexPage = require("./pages/index.page.js");
    page = new indexPage;
    page.get();
  })

  it("contains the title hellow world", function(){
    expect(page.header).toEqual("Hello world");
  });


});
