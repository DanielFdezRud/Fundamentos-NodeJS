const sharp = require("sharp")

sharp("foto.png")
    .resize(80)
    .grayscale()
    .toFile("resizedFoto.png")