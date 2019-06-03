import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8080'      // <- for local development
    baseURL: 'https://www.harbour-light.com/engageapi'
});