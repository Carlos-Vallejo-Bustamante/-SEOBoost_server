const axios = require('axios');
const API_KEY = process.env.API_KEY
class SeoService {
    constructor() {
        this.axios = axios.create({
            method: 'POST',
            url: 'https://seo-audit1.p.rapidapi.com/audit',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'seo-audit1.p.rapidapi.com'
            },
            data: '{"url":"https://tutekno.com","results":["metadata","links","images","content"]}'
        });
    }
    getSearch() {
        return this.axios.get(`https://seo-audit1.p.rapidapi.com/audit`).then((res) => res.data);
    }
}
module.exports = SeoService;