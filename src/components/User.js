import axios from 'axios';

const User = async () => {
    const res = await axios.get('http://randomuser.me/api');
    const userObj = res.data.results[0];

    const template = `
        <div class="card">
            <img src="${userObj.picture.large}" />
            <div class="card-body">
                <h1 class="card-body">${userObj.name.first} ${userObj.name.last}</h1>
                <ul>
                    <li>${userObj.email}</li>
                    <li>${userObj.phone}</li>
                    <li>${userObj.location.city}</li>
                </ul>
            </div>
        </div>
    `

    return template;
}

export default User;