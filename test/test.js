const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function (){


	it('Si la palabra termina en ar, se le quitan las 2 letras', function () {
		const  translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con z, se le añade pe al final', function () {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")
		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	
	it('Si la palabra traducia tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	
	it('Por último, si la palabra originale es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando mayúsculas y minúsculas', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
	
})