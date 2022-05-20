const axios = require("axios")

let API_URL = "http://localhost:5200/graphql"
export const data = await axios.post(API_URL, {
    query: `{
        user{
            id
            name
        }
    }`,
    variables: {
        id: 2,
        city: 'Test'
    }
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})