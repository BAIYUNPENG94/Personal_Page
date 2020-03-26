<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand href=" ">
          <i>YP.Bai</i>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/Resume">Resume</b-nav-item>
            <b-nav-item href="/About">About</b-nav-item>
            <!--<b-nav-item href='#' disabled>Disabled</b-nav-item>-->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                v-model="value1"
                placeholder="Search in Google"
              ></b-form-input>
              <b-button
                @click="googlesearch()"
                size="sm"
                class="my-2 my-sm-0"
                variant="outline-light"
              >Search</b-button>
            </b-nav-form>

            <!--<b-nav-item-dropdown text="Lang" right>-->
            <!--  <b-dropdown-item href="#">EN</b-dropdown-item>-->
            <!--  <b-dropdown-item href="#">ES</b-dropdown-item>-->
            <!--  <b-dropdown-item href="#">RU</b-dropdown-item>-->
            <!--  <b-dropdown-item href="#">FA</b-dropdown-item>-->
            <!--</b-nav-item-dropdown>-->

            <!--<b-nav-item-dropdown right>-->
            <!-- Using 'button-content' slot -->
            <!--  <template v-slot:button-content>-->
            <!--    <em>User</em>-->
            <!--  </template>-->
            <!--  <b-dropdown-item href="#">Profile</b-dropdown-item>-->
            <!--  <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
            <!--</b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-img src="donghua.png" height="240"></b-img>
        </b-col>
        <b-col>
          <b-img src="usc.jpg" height="240"></b-img>
        </b-col>
      </b-row>
    </b-container>

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="240"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/240/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/240/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/240/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="240"
              src="https://picsum.photos/1024/240/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}
        <br />
        Sliding: {{ sliding }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  props: {
    msg: String
  },
  data() {
    return {
      value1: "",
      googleurl: "http://google.com/search?q=",
      slide: 0,
      sliding: null
    };
  },
  methods: {
    googlesearch: function() {
      if (this.value1 == "") {
        return 0;
      } else {
        var searchurl = this.googleurl + this.value1;
        window.open(searchurl);
        this.value1 = "";
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-2 {
  background-color: darkgreen;
}
.my-sm-0 {
  background-color: darkgreen;
}
</style>
