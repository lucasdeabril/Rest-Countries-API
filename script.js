const url = 'https://restcountries.com/v3.1/all'
const div = document.querySelector('.loading')
const containerCopia = document.querySelector('.container-copia');


async function pais(){
    

    const response = await fetch(url)
    console.log(response)
    
    const data = await response.json()
    console.log(data)
    
    

    data.map((post) => {
        
        var card = document.createElement('div')
        var nome_pais = document.createElement('p')
        var flag = document.createElement('img')
        var population = document.createElement('p')
        var capital = document.createElement('p')
        var regiao = document.createElement('p')
        var continent = document.createElement('p')
        var startweek = document.createElement('p')
        var borders = document.createElement('p')
        
        card.classList.add('card')
        card.classList.add('container')
        population.classList.add('population')
        capital.classList.add('capital')
        regiao.classList.add('regiao')
        nome_pais.classList.add('nome')
        nome_pais.classList.add('nome-pais')
        flag.classList.add('flag')
        continent.classList.add('extra')
        startweek.classList.add('extra')
        borders.classList.add('extra')
        continent.classList.add('hide')
        startweek.classList.add('hide')
        borders.classList.add('hide')
        
        
        
        continent.innerText = `continent: ${post.continents}`
        const flagsrc = post.flags['png']
        regiao.innerText = `Region: ${post.region}`
        flag.src= flagsrc;
        nome_pais.innerText = post.name['common']
        population.innerText = `Population: ${post.population}`
        capital.innerText = `Capital: ${post.capital}`
        startweek.innerHTML = `start of week: ${post.startOfWeek}`
        borders.innerHTML = post.borders
        
        card.appendChild(flag)
        card.appendChild(nome_pais)
        card.appendChild(population)
        card.appendChild(regiao)
        card.appendChild(capital)
        card.appendChild(continent)
        card.appendChild(startweek)
        card.appendChild(borders)
        div.appendChild(card)

        
        
    })
}
pais()

// Eventos
window.addEventListener('click', (e)=>{
    target = e.target
if(target.classList.contains('voltar')){
        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        target.classList.toggle('hide')
        const copia = document.querySelector('.container-copia')
        const flag = copia.querySelector('img')
        flag.src = ''

        const regiao=copia.querySelectorAll('p')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = ''
        }
        let extra = document.querySelectorAll('.extra')
        for(i=0;i<extra.length;i++){
            extra[i].classList.toggle('hide')
        }
        containerCopia.classList.toggle('hide')
    }
})

window.addEventListener('click', (e)=>{
    const target = e.target
    var card = target.closest('.card')
    const copia = document.querySelector('.container-copia')
    const foto = card.querySelector('img')
    const flag = copia.querySelector('img')
    let nomecard = card.querySelector('h2')
    let nome = copia.querySelector('p')
    let nome1 = nome
    let voltar = document.querySelector('.voltar')
    const regiao=copia.querySelectorAll('p') //container copia
    
    const paragrafo=card.querySelectorAll('p')//cards

    if(target.classList.contains('flag')){
        
        nome.innerText=target.closest('h2')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = paragrafo[i].innerText
        }
        flag.src = foto.src
        
        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        voltar.classList.toggle('hide')

        let extra = document.querySelectorAll('.extra')
        for(i=0;i<extra.length;i++){
            extra[i].classList.toggle('hide')
        }
        containerCopia.classList.toggle('hide')
        

    }
    if(target.classList.contains('nome')){
        
        nome.innerText= card.querySelector('h2')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = paragrafo[i].innerText
        }
        flag.src = foto.src

        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        voltar.classList.toggle('hide')
        containerCopia.classList.toggle('hide')
    }
    if(target.classList.contains('population')){
        
        
        nome.innerText= card.querySelector('h2')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = paragrafo[i].innerText
        }
        flag.src = foto.src

        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        voltar.classList.toggle('hide')
        containerCopia.classList.toggle('hide')
    }
    if(target.classList.contains('regiao')){
        
        nome.innerText= card.querySelector('h2')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = paragrafo[i].innerText
        }
        flag.src = foto.src

        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        voltar.classList.toggle('hide')
        containerCopia.classList.toggle('hide')
    }
    if(target.classList.contains('capital')){
        
        nome.innerText= card.querySelector('h2')
        for(i=0;i<regiao.length; i++){
            regiao[i].innerText = paragrafo[i].innerText
        }
        flag.src = foto.src

        let cont = document.querySelectorAll('.card')
        
        for(i=0; i<cont.length;i++){
            cont[i].classList.toggle('hide')
        }
        voltar.classList.toggle('hide')
        containerCopia.classList.toggle('hide')
    }
    

})
