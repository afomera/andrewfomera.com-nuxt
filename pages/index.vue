<template>
  <div class="row mt-5">
    <div class="col-lg-6">
      <img
        src="~/assets/andrew.jpg"
        alt="Picture of Andrew Fomera."
        class="img-thumbnail img-fluid">
    </div>

    <div class="col-lg-6 align-items-center justify-content-center d-flex">
      <div class="text-center">
        <h3>Hey there, I'm Andrew Fomera 🙌.</h3>
        <h5 class="text-muted">
          I'm a full-stack Software Engineer.
          I currently
          <a
            href="https://proctoru.com"
            target="_blank">work @ ProctorU.</a>
        </h5>

        <nuxt-link
          to="/about"
          class="mt-2 btn btn-lg btn-primary">Learn More</nuxt-link>
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
  }
}
</script>
