import Vuex from 'vuex'

import state from '../content'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts(state, { posts }) {
        state.posts = posts
      },
      updatePost(state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug({ commit, state }, slug) {
        let post = state.posts.find(post => {
          return post.slug === slug
        })
        commit('updatePost', { post: post })
      },
      getPosts({ commit }) {
        commit('updatePosts', {
          posts: state.posts
        })
      }
    }
  })
}

export default makeStore
