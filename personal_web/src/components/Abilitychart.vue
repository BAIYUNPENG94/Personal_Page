<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <component :is="chartonshow"></component>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <div class="mt-3">
            <b-button-group> 
              <b-button
                pill
                v-on:click="chartonshow = 'radar-chart01'"
                class="button"
                variant="success"
              >Languages&FrameWorks</b-button>
              <b-button pill v-on:click="chartonshow = 'radar-chart03'" class="button" variant="success">Tools</b-button>
            </b-button-group>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RadarChart01 from "./charts/languages.js";
import RadarChart03 from "./charts/tools.js";
export default {
  components: {
    RadarChart01,
    RadarChart03
  },
  data: () => {
    return {
      chartonshow: "radar-chart01",
      test: 1
    };
  }
};
</script>

<style scoped>
.button {
  margin-right: 7px;
  margin-left: 7px;
  background-color: lightcoral;
  border-color: lightcoral;
}
</style>