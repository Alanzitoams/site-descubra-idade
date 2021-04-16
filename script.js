function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value ==0){
        window.alert('ERRO...verifique os dados e tente novamente...')
    }else if(fano.value > ano){
        window.alert('ERRO...verifique os dados e tente novamente...')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto') 
        if(fsex[0].checked){
            genero= 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/bebe-homem.png')
                document.body.style.background="blue"
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovem-homem.jpg')
                document.body.style.background="blue"
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulto-homem.jpg')
                document.body.style.background="blue"
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
                document.body.style.background="blue"
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/bebe-mulher.jpg')
                document.body.style.background="pink"
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovem-mulher.jpg')
                document.body.style.background="pink"
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulta-mulher.jpg')
                document.body.style.background="pink"
            }else{
                //idoso
                img.setAttribute('src','imagens/idosa-mulher.jpg')
                document.body.style.background="pink"
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}