const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');


describe("message class", function() {
  it("throws error if a name is NOT passed into the constructor as the first parameter", function(){
    assert.throws(
      function()  {
        new Message();

      },
      {
        message: "Please enter Name parameter"
      }
      
      );

  });


});