<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
            <radar-chart/>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RadarChart from "./radarchart.js";
export default {
  components: {
    RadarChart
  }
};
</script>