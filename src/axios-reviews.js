import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jewelry-byky-default-rtdb.firebaseio.com/'
});


export default instance;
