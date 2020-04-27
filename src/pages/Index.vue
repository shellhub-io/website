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

</script>

<style>

</style>