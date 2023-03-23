const url = 'https://restcountries.com/v3.1/all'

const div = document.querySelector('div')
async function pais(){
    

    const response = await fetch(url)
    console.log(response)
    
    const data = await response.json()
    console.log(data)
    
    

    data.map((post) => {
        const card = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('p')

        title.innerText = post.name['common']
        body.innerText = post.population
        link.innerText = post.capital
        card.appendChild(title)
        card.appendChild(body)
        card.appendChild(link)
        div.appendChild(card)
    })
}

pais()