<template>
  <!-- <div class="post">
    <h1>{{$page.posts.edges}}</h1>
  </div> -->

  <!-- <div class="post">
    <div v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
      <h1>{{edge.node.title}}</h1>
      <h1>{{edge.node.slug}}</h1>    

    </div>   
  </div> -->
  <Layout>

    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<page-query>
  query {
    posts:allBlogPost(sortBy: "id",order: ASC) {
      edges{
        node{
          id
          title
          slug
        }
      }
    }
  }
</page-query>

<script>
// export default {
//   metaInfo: {
//     title: 'Hello, world!'
//   }
// }
</script>

<style>
/* .home-links a {
  margin-right: 1rem;
} */
</style>
