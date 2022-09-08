function verificar(){
var ano = Number(window.document.getElementById("input-ano").value)
var genero = window.document.getElementById("input-masc")
var anoAtual = new Date()
var idade = anoAtual.getFullYear() - ano
var genero = window.document.getElementById('masc').checked
var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(ano > anoAtual.getFullYear() || ano <= 1900){
        msg.innerHTML="Ano inválido"
    }else if(genero){
        if(idade > 0 && idade <= 10){
        img.src = 'imagens/foto-bebe-m.png'
        }else if(idade > 10 && idade <= 20){
        img.src = 'imagens/foto-jovem-m.png'
        }else if(idade > 21 && idade <= 50){
        img.src = 'imagens/foto-adulto-m.png'
        }else{
        img.src = 'imagens/foto-idoso-m.png'
        }
        msg.innerHTML = `Detectamos Homem com ${idade} anos`
        window.document.getElementById('msg').appendChild(img)
    }else{
        if(idade > 0 && idade <= 10){
        img.src = 'imagens/foto-bebe-f.png'
        }else if(idade > 10 && idade <= 20){
        img.src = 'imagens/foto-jovem-f.png'
        }else if(idade > 21 && idade <= 50){
        img.src = 'imagens/foto-adulto-f.png'
        }else{
        img.src = 'imagens/foto-idoso-f.png'
        }
        msg.innerHTML = `Detectamos Mulher com ${idade} anos`
        window.document.getElementById('msg').appendChild(img)
    }
    
}
/*https://blog.rocketseat.com.br/introducao-ao-dom/*/