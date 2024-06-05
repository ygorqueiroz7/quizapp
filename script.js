import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)