<template>
<nav>
  <ul>
    <li :class="{'selected': isSelected['Home']}"><a href="#home" v-on:click="onClick">Home</a></li>
    <li :class="{'selected': isSelected['About Me']}"><a href="#about" v-on:click="onClick">About Me</a></li>
    <li :class="{'selected': isSelected['Resume']}"><a href="#resume" v-on:click="onClick">Resume</a></li>
    <li :class="{'selected': isSelected['Sample Works']}"><a href="#works" v-on:click="onClick">Sample Works</a></li>
    <li :class="{'selected': isSelected['Contact Me']}"><a href="#contact" v-on:click="onClick">Contact Me</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentSelected: '',
      isSelected: {
        'Home': false,
        'About Me': false,
        'Resume': false,
        'Sample Works': false,
        'Contact Me': false
      }
    };
  },
  beforeMount() {
    this.currentSelected = this.selected
    this.isSelected[this.currentSelected] = true;
  },
  methods: {
    onClick(event) {
      this.isSelected[this.currentSelected] = false;
      this.currentSelected = event.target.innerText;
      this.isSelected[this.currentSelected] = true;
    }
  }
}
</script>

<style scoped>
nav {
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: calc(100% - 10px);
  text-align: center;
  font-size: 2.965vh; /*2em at 1080p*/
  background: rgba(0,0,0, 0.5);
  box-shadow: 0 0px 2em 2.5em rgba(0,0,0, 0.5);
  z-index: 99;
}
a {
  color: white;
}
a:visited {
  color: white;
}
a::after {
  background: white;
}

ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0;
}

ul > li {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
}
ul > li:not(:first-child) {
  border-left: 1px white solid;
}
ul > li.selected {
  border: 1px white solid;
}
ul > li.selected:not(:last-child) {
  border-right: none;
}

@media (max-width: 850px) {
  nav {
    font-size: 1em;
  }
}
</style>
