<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <homepage />
    <UnivLogo />
    <SlidePhoto />
    <Abilitychart />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "../components/Homepage.vue";
import SlidePhoto from "../components/SlidePhoto.vue";
import UnivLogo from "../components/UnivLogo.vue";
import Abilitychart from "../components/Abilitychart.vue";
import Projects from "../components/Projects.vue"
/*import test from "../components/test.vue"*/

export default {
  name: "Home",
  components: {
    Homepage,
    UnivLogo,
    SlidePhoto,
    Abilitychart,
    Projects,
  }
};
</script>
