<template>

  <Layout>
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
// import VueRouter from 'vue-router' // << aqui
// Vue.use(VueRouter) // << e aqui

</script>

<style>

</style>
