const axios = require('axios');
// const API_KEY = process.env.API_KEY
class KeywordService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://keywords4.p.rapidapi.com/google-topLevel-10-keywords',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'f2923471cemsh02c1dc1259ce53cp148bb8jsn2c222cb7efc6',
                'X-RapidAPI-Host': 'keywords4.p.rapidapi.com'
            },
        });
    }
    getKeywords(keyword, country) {
        return this.axios.get(`?search=${keyword}&country=${country}`).then((res) => res.data);
    }
}

module.exports = KeywordService;