/*  Instanciar variables a utilizar - Carga de modulo Express */
const express = require("express")
const app = express()
const path = require("path")

/* Ruta raiz */
app.get("/", function(req, res) {
        res.send(`Ni Superman, Iron
        Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
        hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
        inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
        ti!`)
})

/* Pagina Heroes */
app.get("/heroes", function(req, res) {
    let archivoHeroes = path.resolve("heroes.json")    
    res.sendFile(archivoHeroes)
})

/* Pagina Creditos */
app.get("/creditos", function(req, res) {
    res.send(`Developer: Oscar Ariel Saucedo ----
    Trabajo finalizado`)
})

/* Pagina Default */
app.get("*", function(req, res) {
    res.send(`Error: Not Found`)
})

/* Llamado a servidor - Puerto 3000 */
app.listen(3000)