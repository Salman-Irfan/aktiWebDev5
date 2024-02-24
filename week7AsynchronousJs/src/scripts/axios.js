console.log(`axios file attached`)

const apiUrl = `https://dummyjson.com/products`


const fetchApiData = async () => {
    const axiosResponse = await axios.get(apiUrl)
    console.log(axiosResponse)
    console.log(axiosResponse.data)
}


fetchApiData()