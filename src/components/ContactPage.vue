<template>
<div id="contact" class="subpage">
  <div class="lozad" data-toggle-class="parallax-background"></div>
  <header id="contact-header" class="header-box">
    <h1>Let's have a talk</h1>
    <p>Have a question, concern, or just want to get in touch? No matter what, I'd love to hear from you.</p>
    <contact-icons></contact-icons>
    <img src="/assets/img/jake_signature_white.png" alt="Jake Deerin">
  </header>
</div>
</template>

<script>
import ContactIcons from './ContactIcons'

export default {
  components: {
    'contact-icons': ContactIcons
  }
}
</script>

<style scoped>
.parallax-background {
  background: url(/assets/img/contactPhoto.webp) no-repeat scroll center center/cover;
  height: 100%;
}

#contact-header {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    text-align: center;
    font-size: 3vh;
}
#contact-header h1 {
    font-size: 5.925vh;
    margin-bottom: 5vh;
}
#contact-header img {
    width: 60%;
}

@media (max-width: 850px) {
  #contact-header {
    font-size: 1.2em;
  }
  #contact-header h1 {
    font-size: 2em;
  }
  #contact-header img {
    width: 100%;
  }
}
</style>
