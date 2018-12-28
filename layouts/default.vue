<template>
  <div>
    <Navbar />
    <div class="container">
      <nuxt/>
    </div>
    <!--
      These are commented out because I kept fighting with weird margin issues for long pages
      <footer class="footer bg-dark text-light">
      <div class="container">
        <div class="text-center py-5">
          <p class="text-white">
            &copy; 2014-2018 Andrew Fomera
          </p>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="https://github.com/king601"
                target="_blank">GitHub</a>
            </li>
            <li class="list-inline-item">&middot;</li>
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="https://twitter.com/AndrewFomera"
                target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<style>
</style>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  },
  head: {
    bodyAttrs: {
      class: 'logged-out'
    }
  }
}
</script>
