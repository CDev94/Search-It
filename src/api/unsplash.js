import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
     headers: {
         Authorization: 'Client-ID 5352a9d9c2a176375fd5544d01476fe1dfd9dc490b95c97e7a329c1026966efe'
     }
})