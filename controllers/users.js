const axios = require('axios');
const { json } = require('express');

exports.getUserRepo = async (req, res) => {
    const resultWithLinks = []
    try {
        const user = req.params.name
        const form = {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `https://api.github.com/users/${user}/repos`
            };
        const { data } = await axios(form)
        data.forEach(element => {
            resultWithLinks.push({
                "name" : element.name,
                "html" : element.html_url,
                "url"  : element.url,
                "description" : element.description
            })
        });
        res.status(200).json(resultWithLinks)
    } catch (error) {
        res.status(500).json('No user found')
        console.log(error)
    }
}