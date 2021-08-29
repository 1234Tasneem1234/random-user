const loadUser = () => {
    const url = 'https://randomuser.me/api';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data))
}
loadUser();

const displayUser = randomUser => {
    console.log(randomUser.results[0])
    const userContainer = document.getElementById('user-container');
    const imageUrl = randomUser.results[0].picture.large;
    const userLocation = randomUser.results[0].location;
    userContainer.innerHTML = `
        <img src = ${imageUrl}>
        <h4>User-Name: ${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}</h4>
        <p>User-Location: ${userLocation.street.number} ${userLocation.street.name} ${userLocation.city} ${userLocation.state} ${userLocation.country}</p>
        <p>User-Email: ${randomUser.results[0].email}</p>
        <p>User-Phone Number: ${randomUser.results[0].phone}</p>
        <p>User-Gender: ${randomUser.results[0].gender}</p>
        <p>User-Age: ${randomUser.results[0].dob.age}</p>
        <p>User-Register-Date: ${randomUser.results[0].registered.date}</p>
    `}

const div = document.getElementsByTagName('div');
for (const userContainer of div) {
    userContainer.style.border = '3px solid rgb(230, 26, 234)';
    userContainer.style.padding = '15px';
}

