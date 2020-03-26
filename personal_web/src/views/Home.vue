<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <homepage msg = "This is my Personal web's homepage, my name is Jim.Bai"/>
    <SlidePhoto/>
    <UnivLogo/>
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
