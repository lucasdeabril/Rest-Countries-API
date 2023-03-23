const url = 'https://restcountries.com/v3.1/all'

const div = document.querySelector('div')
async function pais(){
    

    const response = await fetch(url)
    console.log(response)
    
    const data = await response.json()
    console.log(data)
    
    

    data.map((post) => {
        const card = document.createElement('div')
        const nome_pais = document.createElement('h2')
        const flag = document.createElement('img')
        const population = document.createElement('p')
        const capital = document.createElement('p')
        card.classList.add('card')
        const regiao = document.createElement('p')
        
        
        const flagsrc = post.flags['png']
        regiao.innerText = `Region: ${post.region}`
        flag.src= flagsrc
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