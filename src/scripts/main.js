document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault()
        let numMax = document.getElementById('numero-max').value;
        numMax = parseInt(numMax);

        let numRandom = Math.random() * numMax;
        numRandom = Math.floor(numRandom + 1)

        document.getElementById('resultadoNum').innerText = numRandom
        document.querySelector('.resultado').style.display = 'block'
    })
})