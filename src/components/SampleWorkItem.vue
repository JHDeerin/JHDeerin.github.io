<template>
<div class="sample-work-item lozad" :data-background-image="imgUrl">
  <div class="work-caption">
      <p><b>{{ title }}</b></p>
      <p>{{ description }}</p>
      <p><a :href="githubUrl">View on GitHub</a></p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
.work-caption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 1em;
  text-align: center;
  transition: 0.2s ease-out all;
  background: rgba(0,0,0, 0.5);
}
.work-caption:hover {
  opacity: 100;
}
.work-caption p {
  margin: 0.5em;
}

.sample-work-item {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 1920px) {
  .work-caption {
    font-size: 0.833vw;
  }
}
</style>>
