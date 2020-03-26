<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <homepage/>
    <UnivLogo/>
    <SlidePhoto/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '../components/Homepage.vue'
import SlidePhoto from '../components/SlidePhoto.vue'
import UnivLogo from '../components/UnivLogo.vue'

export default {
  name: 'Home',
  components: {
    Homepage,
    UnivLogo,
    SlidePhoto
  }
}
</script>
