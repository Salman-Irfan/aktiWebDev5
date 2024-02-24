console.log(`api file attached`)

const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`


const fetchApiData = async () => {
    const apiResponse = await fetch(apiUrl)
    
    
    
    console.log(apiResponse)

    const jsonResponse = await apiResponse.json()
    console.log(jsonResponse)
}

fetchApiData()