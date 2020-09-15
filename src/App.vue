<template>
<main id="main" class="parallax-container">
  <navbar-menu selected="Home"></navbar-menu>

  <home-page></home-page>

  <about-page></about-page>

  <resume-page></resume-page>

  <works-page></works-page>

  <contact-page></contact-page>
</main>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ResumePage from './components/ResumePage.vue'
import WorksPage from './components/WorksPage.vue'
import ContactPage from './components/ContactPage.vue'

import NavbarMenu from './components/NavbarMenu.vue'

export default {
  name: 'App',
  components: {
    'home-page': HomePage,
    'about-page': AboutPage,
    'resume-page': ResumePage,
    'works-page': WorksPage,
    'contact-page': ContactPage,

    'navbar-menu': NavbarMenu
  }
}
</script>

<style>
@import url(./assets/clear_styles.css);
@import url(./assets/styles.css);

.subpage {
  display: block;
  position: relative;
  overflow: hidden;
  padding: 1px 0;
  width: 100vw;
  min-height: 100vh;
}

@media (max-width: 850px) {
  #about .parallax-background {
    height: 33%;
  }

  #resume .parallax-background {
    height: 25%;
  }
}
</style>
