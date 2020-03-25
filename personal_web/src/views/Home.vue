<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <homepage msg = "This is my Personal web's homepage, my name is Jim.Bai"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '../components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
