//----- 1 -------
// export default (req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ message: 'hello' }))
//   }

//localhost:3000/api/data
//from terminal : http PUT :3000/api -> respond the message: 'hello'

//----- 2 -------
import nc from 'next-connect';
import cors from 'cors'

//you can also do async funcs if you want
const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
  .put(async (req, res) => {
    res.end('hello')
  })

export default handler;