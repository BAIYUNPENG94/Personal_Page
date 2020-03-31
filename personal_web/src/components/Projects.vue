<template>
  <div>
    <div class="divsize">
      <b-container fluid>
        <b-row class="nopadding">
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>BootstrapVue</template>

              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to
                featured content or information.
              </template>

              <hr class="my-4" />

              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger
                container.
              </p>
            </b-jumbotron>
          </b-col>
          <b-col cols="3" class="nopadding">
            <img src="donghua.png" class="img nopadding" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divsize">
      <b-container fluid>
        <b-row>
          <b-col cols="3" class="nopadding">
            <img src="Wasedalogo.jpg" class="img nopadding" />
          </b-col>
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>BootstrapVue</template>

              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
              </template>

              <hr class="my-4" />

              <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
              </p>
            </b-jumbotron>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.divsize {
  width: 80%;
  background-color: white;
  margin: auto;
  /*border: 1px black solid;*/
}
.nopadding {
  padding: 0px 0px 0px 0px;
}
.jum {
  border: 0 !important;
  margin-bottom: 0;
  border-radius: 0;
  background-color: white !important;
  color: black !important;
}
.img {
  max-height: 100%;
  max-width: 100%;
}
</style>