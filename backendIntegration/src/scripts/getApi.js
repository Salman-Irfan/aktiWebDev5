console.log(`get api`)

const getApiUrl = `http://localhost/php-rest-api/get-api-two.php`

// get api
const getResponseFromPhp = async () => {
    const response = await axios.get(getApiUrl)
    console.log(response)
}
getResponseFromPhp()


// post api
const postApiUrl = `http://localhost/php-rest-api/post-api-two.php`
const postResponseFromPhp = async () => {
    const response = await axios.post(postApiUrl, {
        name: "salman",
        email: "salman@gmail.com"
    })
    console.log(response)
}
postResponseFromPhp()