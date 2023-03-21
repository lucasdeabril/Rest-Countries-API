const url = 'https://restcountries.com/v3.1/all'
const load = document.querySelector('.loading')

async function pais(){
    

    const response = await fetch(url)
    console.log(response)
    
    const data = await response.json()
    console.log(data)
    
    load.classList.add('hide')

    data.map((post) => {
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('a')

        title.innerText = post.name;
        body.innerText = post.capital
        link.innerText = 'saber mais'
    })
}

pais()