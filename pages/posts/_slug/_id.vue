<template>
  <div class="row mt-5">
    <div class="col-sm-12 align-items-center justify-content-center d-flex">
      <div class="col-sm-12">
        <h3 class="text-center">{{ post.title }}</h3>
        <h5 class="text-center text-muted mb-3">Posted on: {{ post.created_at }}</h5>

        <div class="post mt-3">
          <div v-html="postContent" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    let post = this.post
    return {
      title: post.title + ' - Andrew Fomera',
      meta: [
        {
          hid: post.meta.id,
          name: post.meta.name,
          content: post.meta.content
        }
      ]
    }
  },
  fetch({ store, params }) {
    store.dispatch('getPosts')
    store.dispatch('getPostWithSlug', params.slug)
  },
  computed: {
    post() {
      return this.$store.state.post
    },
    postContent() {
      let post = this.$store.state.post
      return require(`../../../content/posts/${post.id}.md`)
    }
  }
}
</script>
