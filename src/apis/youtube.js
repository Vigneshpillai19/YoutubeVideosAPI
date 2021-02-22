import axios from 'axios';
// const KEY = 'AIzaSyA72FTBsIh2tio1pqgOocW8iYuzN9DNghs';
const KEY = 'AIzaSyA26h_LWgzp9i1RnLqFBTozgUkZV3pEWLo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});