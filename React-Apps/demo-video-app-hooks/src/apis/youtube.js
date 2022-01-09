import axios from 'axios';

const KEY = 'AIzaSyB4O_H3URojNlxJ0u7GBXgX_OFAD_hHohM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
