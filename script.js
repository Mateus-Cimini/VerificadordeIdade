function verificar() {
    var nasceu = document.getElementById('txtano')
    var res = document.querySelector('div#result')

    if (nasceu.value > 2025) {
        window.alert("Erro!!!")
    } else {
      
    }

    var sex = document.getElementsByName("radsex")
    var idade = 2024 - Number(nasceu.value)
    var genero = ``
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (sex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10 ) {
            img.setAttribute('src', 'imgs/bebeM.png')
        } else if ( idade < 21) {
            img.setAttribute('src', 'imgs/jovemM.png')
        } else if (idade  < 50) {
            img.setAttribute('src', 'imgs/adultoM.png')
        } else {
            img.setAttribute('src', 'imgs/idoso.png')
        }
        
    } else if (sex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10 ) {
            img.setAttribute('src', 'imgs/bebeF.png')
        } else if ( idade < 21) {
            img.setAttribute('src', 'imgs/jovemF.png')
        } else if (idade  < 50) {
            img.setAttribute('src', 'imgs/adultoF.png')
        } else {
            img.setAttribute('src', 'imgs/idosa.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`   
    res.appendChild(img)
    
    }

