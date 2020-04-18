<template>
  <div>
    <div class="divsize">
      <b-container fluid>
        <b-row class="nopadding">
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>
                <h1>UAV 3D Reconstruction Path Planing System</h1>
              </template>

              <template
                v-slot:lead
              >Developed a drone path planing system to raise the efficiency of 3D reconstruction.</template>
              <hr />
              <p>
                &Delta; Developed a sensors based drone control system by using Ros melodic system and Ardupilot Software suite.
                <br />&Delta; Used Gazebo do all the simulation experiments.
                <br />&Omicron; Using Languages and Platforms: C++, Python, ROS melodic system, Gazebo, Raspberry Pi.
              </p>
            </b-jumbotron>
          </b-col>
          <b-col cols="3" class="nopadding">
            <img src="ROSdrone.png" class="img nopadding"  />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divsize">
      <b-container fluid>
        <b-row class="nopadding">
          <b-col cols="3" class="nopadding">
            <img src="worldapp.jpg" class="img nopadding" />
          </b-col>
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>
                <h1>A World Time App</h1>
              </template>
              <hr />
              <p>
                &Delta; Mainly developed using Dart language and Flutter framework.
                <br />&Omicron; Using Languages and Platforms: Dart, Flutter, Android Studio.
              </p>
            </b-jumbotron>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divsize">
      <b-container fluid>
        <b-row>
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>
                <h1>System of Controlling Remote Car Using Computer</h1>
              </template>
              <template
                v-slot:lead
              >Developed a system which can remote control a remote car in different network use laptop keyboard.</template>
              <hr />

              <p>
                &Delta; The signal receive and control part is developed on Raspberry Pi and Arduino.
                <br />&Omicron; Using Languages and Platforms: C++, Raspberry Pi, Arduino, Arduino IDE.
              </p>
            </b-jumbotron>
          </b-col>
          <b-col cols="3" class="nopadding">
            <img src="NoPhotoYet.png" class="img nopadding" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divsize">
      <b-container fluid>
        <b-row class="nopadding">
          <b-col cols="3" class="nopadding">
            <img src="NoPhotoYet.png" class="img nopadding" />
          </b-col>
          <b-col cols="9" class="nopadding">
            <b-jumbotron class="jum" bg-variant="info" text-variant="white" border-variant="dark">
              <template v-slot:header>
                <h1>My Personal Web Page</h1>
              </template>

              <hr />
              <p>
                &Delta; Developed the front-end page based on VUE framework and Bootstrap.
                <br />&Delta; Developed the personal blog page use Hexo.
                <br />&Omicron; Using Languages and Platforms: VUE, Bootstrap, HTML5, JavaScript, Hexo.
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
  margin-top: 12px;
}
.jum {
  border: 1 !important;
  margin-top:12px;
  margin-bottom: 12px;
  border-radius: 0;
  background-color: white !important;
  color: black !important;
  text-align: left !important;
}
.img {
  max-height: 100%;
  max-width: 100%;
}
</style>