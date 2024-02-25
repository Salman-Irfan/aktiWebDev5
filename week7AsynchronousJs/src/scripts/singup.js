console.log(`file attached`)

const name = document.getElementById('name')
console.log(name)
const email = document.getElementById('email')
const password = document.getElementById('password')


const signUpForm = document.getElementById("signUpForm")

const handleUserSignUp = (e) => {
    e.preventDefault();

    const formData = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    
    console.log(formData);

    // axios post api call
    const submitUserData = async () => {
        const response = await axios.post(`https://formspree.io/f/xpzvrqvd`, formData)
        console.log(response)
        if(response.data.ok){
            alert(`user added successfully`)
        }
    }

    submitUserData()

};


signUpForm.addEventListener('submit', handleUserSignUp)