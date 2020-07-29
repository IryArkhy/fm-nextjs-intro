const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
dotenvLoad();
//replaces process.env.MY_VAR with actual value in your code! Be sure that you've added .env to .gitignore
const withEnv = nextEnv();
module.exports = withEnv()