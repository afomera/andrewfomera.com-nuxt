<template>
  <div class="row mt-5">
    <div class="col-md-12 align-items-center justify-content-center d-flex">
      <div>
        <h3 class="text-center">Stuff I've Written ✍️.</h3>
        <h5 class="text-center text-muted mb-3">Writings on things I found interesting or wanted to share.</h5>

        <div
          v-for="post in posts"
          :key="post.id"
          class="row mb-3 justify-content-center">
          <div class="col-md-10 col-offset-2">
            <div class="card card-body">
              <p
                class="created-at"
                v-html="post.created_at"/>
              <h4><nuxt-link
                :to="'posts/' + post.slug"
                class="card-heading">{{ post.title }}</nuxt-link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Andrew Fomera - Software Engineer'
    }
  },
  fetch({ store }) {
    store.dispatch('getPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
</style>
