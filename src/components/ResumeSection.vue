<template>
<section>
  <h2>{{ title }}</h2>
  <hr>
  <slot></slot>
</section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
