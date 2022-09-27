const axios = require('axios');
const API_KEY = process.env.API_KEY
class SeoService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://seo-audit1.p.rapidapi.com/audit',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'seo-audit1.p.rapidapi.com'
            },
        });
    }
    getSearch(url) {
        return this.axios.post('/', { "url": url, "results": ["metadata", "links", "images", "content"] });
    }
}
module.exports = SeoService;