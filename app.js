const express = require("express")
const app = express()
const path = require("path")

app.get("/", function(req, res) {
        res.send(`Ni Superman, Iron
        Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
        hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
        inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
        ti!`)
})

app.get("/heroes", function(req, res) {
    let archivoHeroes = path.resolve("heroes.json")    
    res.sendFile(archivoHeroes)
})

app.get("/creditos", function(req, res) {
    res.send(`Developer: Oscar Ariel Saucedo ----
    Trabajo finalizado`)
})

app.get("*", function(req, res) {
    res.send(`Error: Not Found`)
})

app.listen(3000)