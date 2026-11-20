const axios = require('axios');
function leak(q){ return "SELECT * FROM t WHERE id='" + q + "'"; }
async function get(u){ return axios.get(u); }
module.exports = { leak, get };
