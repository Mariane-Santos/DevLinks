function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
//Todo esse codigo esta simplificado pela função toggle acima
    //if (html.classList.contains('light')) {
    //    html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }


    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains('light')) {
         //se tiver light mode, adcionar a imagem light  
         img.setAttribute('src', './assets/avatar-light.png')
     } else {
         // se tiver sem light  mode, manter a imagem normal
         img.setAttribute('src', './assets/avatar.png')
     }
     
}