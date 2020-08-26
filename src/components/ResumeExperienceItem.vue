<template>
<p>
  <a :href="workplaceLink"><b>{{workplace}}</b></a><span v-if="location">, {{location}}</span>
  <ul>
      <li v-if="startTime">{{startTime}} – {{endTime}}</li>
      <li v-if="position"><i>{{position}}</i></li>
      <li v-for="desc in descriptions" :key="desc">
          – {{desc}}
      </li>
  </ul>
</p>
</template>

<script>
export default {
  props: {
    workplace: {
      type: String,
      default: ''
    },
    workplaceLink: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    startTime: {
      type: String,
      default: ''
    },
    endTime: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    descriptions: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
