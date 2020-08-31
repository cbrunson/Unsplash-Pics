import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID ZOJjBvLB3Y7sKznGi_ehaD7VHkK_8YoaX46IUSUzrdw'
    }
});