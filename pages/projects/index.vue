<template>
  <div class="row mt-5">
    <div class="col-md-12 align-items-center justify-content-center d-flex">
      <div>
        <h3 class="text-center">Things I've Worked On 👨‍💻</h3>
        <h5 class="text-center text-muted mb-3">Here are some things I've worked on.</h5>

        <div class="my-3 card card-body">
          <h5 class="card-title">AthensMC</h5>
          <p class="card-text">
            AthensMC is an online gaming community focused around providing a safe place to play games online.
            I started AthensMC in 2014 when I was trying to learn Ruby on Rails and
            it's grown into a decently sized application with a variety of features all around building the community.
          </p>
          <p><strong>Favorite Features:</strong></p>
          <ul>
            <li>Whitelist Request / Approval System</li>
            <li>Realtime Notifications</li>
            <li>Community Forum System</li>
            <li>Ruby on Rails</li>
          </ul>
          <p class="card-text">
            <a
              href="https://github.com/king601/AthensMC"
              class="card-link"
              target="_blank">Visit AthensMC on GitHub</a>

            <a
              href="https://athensmc.com"
              class="card-link"
              target="_blank">Visit AthensMC.com</a>
          </p>
        </div>

        <div class="my-3 card card-body">
          <h5 class="card-title">Hootstrap</h5>
          <p class="card-text">Hootstrap is ProctorU's design framework built on top of Bootstrap 4.
          This was an internal project I help maintain now, and we upstream all shared code for projects to use.
          One benefit of Hootstrap is it does not require jQuery for the Javascript components.
          </p>
          <ul>
            <li>I added support for collapable navbars.</li>
            <li>I upgraded it from Bootstrap 4.0 to Bootstrap 4.1.</li>
          </ul>
          <a
            href="https://github.com/proctoru/hootstrap"
            class="card-link"
            target="_blank">Visit Hootstrap on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'My Projects - Andrew Fomera'
    }
  }
}
</script>

<style>
</style>
