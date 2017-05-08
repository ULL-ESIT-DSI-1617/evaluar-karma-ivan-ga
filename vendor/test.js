
var expect = chai.expect;






//Medida

describe("Medida", function () {
  describe("Constructor", function() {
    it("Existe un Constructor", function() {
      var medida = new Medida(21, 'c');
      expect(medida.valor).to.equal(21);
      expect(medida.tipo).to.equal('c');
    });
   
  });
  
 
});





//Temperatura

describe("Clase Temperatura", function () {
  describe("constructor", function() {
    it("Existe un constructor", function() {
      var temperatura = new Temperatura (21, 'c');
      expect(temperatura.valor).to.equal(21);
    });
    
    
  });
});



//Celsius

describe("Celsius", function () {
  describe("constructor", function() {
    it("Existe un Constructor", function() {
      var celsius = new Celsius(21);
     expect(celsius.valor).to.equal(21);
    
    });
  });
});




//Farenheit

describe("Fahrenheit", function () {
  describe("constructor", function() {
    it("Existe un Constructor", function() {
      var f = new Fahrenheit(21);
      expect(f.valor).to.equal(21);
    });
  });
});

//Kelvin

describe("Kelvin", function () {
  describe("constructor", function() {
    it("Existe un Constructor", function() {
      var k = new Kelvin(21);
      expect(k.valor).to.equal(21);
    
    });
  });
});



