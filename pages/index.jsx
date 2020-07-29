/** @jsx jsx */
import { jsx } from 'theme-ui'

//------ 1 --------
// export default () => (
  export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      {/* <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1> */}
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div>
)

//------ 2 --------
//executed on the server/ it wob't even ship in the bundle

//if will run in a build time!!!

/*

export async function getStaticProps(context) {
  console.log(context) // returns "{}" in the terminal
  return {
    props: {}
  }
}
*/

//------- 3 ------
//fetch all the generated paths for all your unique urls
// /docs/[...params]
//we want to generate ahead all the pages for our documentation web-site
//a way to get static paths - to be statically generated

//// /pages/blog/:slug.js


// export async function getStaticPaths() {
//   // get all the paths for your posts from an API
//   // or file system
//   const results = await fetch('/api/posts')
//   const posts = await results.json()
//   const paths = posts.map(post => ({params: {slug:
//   post.slug}}))
//   /*
//   [
//     {params: {slug: 'get-started-with-node'}},
//     {params: {slug: 'top-frameworks'}}
//   ]
//   */
//   return {paths}
// }

//now you can get all params
// export async function getStaticProps({ params }) {
//   const res = await fetch(`/api/post/${params.slug}`)
//   const post = await res.json()
//   return {
//     props: {post}
//   }
// }

// ------ 4 -------
//serverSideProps
//is always executed PER request every time
//true SSR

//Authentication --> use hook to see if authenticated and redirect to auth page if not - on frontend/ On bakcend - put a middleware for chaking --> if req.headers.authentication -> do logic

//simulate data fatching from CMS
export function getStaticProps() {
  //get data from CMS
  return {
    props: {
      content: {
        title: 'This is my really nice app!'
      }
    }
  }
}

//data fatching in components ---> PURELY on the client side!!!!! -> classic approaches of REact. Fetch data on the client side
//usually it's fetchd on the page file

//Pre-rendering: generate a html string before it goes to the browser

//Static generation: docs, landings, blogs -> content not being changed by a user.  (getStaticProps)

//SSR: it will turn you reat component into a string but per request. it is computed at a run time (serverSideProps)

//Client side rendering: usual thing with create react app.