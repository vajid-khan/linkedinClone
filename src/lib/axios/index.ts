import axios from 'axios';

const client = axios.create({
    baseURL:'https://dummyapi.io/data/api',
    headers:{
        'app-id':'605de3330304917449c54e7b'
    }
});

export default client;