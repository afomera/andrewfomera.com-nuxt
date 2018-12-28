<template>
  <b-navbar
    toggleable="md"
    type="light"
    variant="white">

    <div class="container">
      <nuxt-link
        to="/"
        class="navbar-brand">Andrew Fomera</nuxt-link>

      <b-navbar-toggle
        target="nav_collapse" />
      <b-collapse
        id="nav_collapse"
        is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nuxt-link
            to="/about"
            class="nav-item nav-link">About</nuxt-link>

          <nuxt-link
            to="/projects"
            class="nav-item nav-link">Projects</nuxt-link>

          <nuxt-link
            to="/posts"
            class="nav-item nav-link">Blog</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
