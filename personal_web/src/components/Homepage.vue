<template>
  <div>
    <div>
      <b-navbar class="navbar" toggleable="lg" type="dark">
        <b-navbar-brand href=" ">
          <i>Yunpeng.Bai</i>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/Resume">Resume</b-nav-item>
            <b-nav-item href="/blog">Blog</b-nav-item>
            <b-nav-item href="/About">AboutPage</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <h1

              align="center"
              class="Masterstudent"
            >WASEDA University Master Student Class Of 2020.Sep</h1>

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
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
  background-color: darkred;
}
.my-sm-0 {
  background-color: darkred;
}
.navbar {
  background-color: darkred;
}
.univname {
  text-align: center;
  color: white;
  background-color: darkred;
}
.Masterstudent {
  font-size: 1.4em;
  color: white;
  padding: 7px 0px 0px 0px;
}
</style>
