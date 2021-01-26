import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mychimibuilder-default-rtdb.firebaseio.com/'
});


export default instance;