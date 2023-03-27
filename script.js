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
        var nome_pais = document.createElement('h2')
        var flag = document.createElement('img')
        var population = document.createElement('p')
        var capital = document.createElement('p')
        var regiao = document.createElement('p')
        
        card.classList.add('card')
        card.classList.add('container')
        
        
        flag.classList.add('flag')

        const flagsrc = post.flags['png']
        regiao.innerText = `Region: ${post.region}`
        flag.src= flagsrc;
        nome_pais.innerText = post.name['common']
        population.innerText = `Population: ${post.population}`
        capital.innerText = `Capital: ${post.capital}`
        
        card.appendChild(flag)
        card.appendChild(nome_pais)
        card.appendChild(population)
        card.appendChild(regiao)
        card.appendChild(capital)
        div.appendChild(card)

        
        
    })
}
pais()

// Eventos









