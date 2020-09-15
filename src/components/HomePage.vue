<template>
<div id="home" class="subpage">
  <div class="parallax-background"></div>
  <header class="header-box">
      <h1>Hi.</h1>
      <h1>I'm <a href="#about">Jake</a>.</h1>
      <h1>I Write <a href="#works">Code</a>.</h1>
  </header>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.parallax-background {
  background: url(/assets/img/homePhoto.webp) no-repeat scroll center center/cover;
}

.header-box {
  margin-top: 15vh; /*+5 for navbar*/
}
</style>
