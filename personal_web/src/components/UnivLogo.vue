<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="logo">
          <b-img
            @click="opendonghua"
            class="pointer"
            center
            src="donghua.png"
            height="240"
            width="auto"
          ></b-img>
        </b-col>
        <b-col class="logo">
          <b-img @click="openwaseda" class="pointer" src="Wasedalogo.jpg" height="240" width="auto"></b-img>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row>
        <b-col class="logo">
          <h1 class="univname">Communication Engineering</h1>
        </b-col>
        <b-col class="logo">
          <h1 class="univname">Computer Science and Communication Engineering</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    test: function() {
      console.log(1);
    },
    opendonghua: function() {
      window.open("http://english.dhu.edu.cn/");
    },
    openwaseda: function()  {
      window.open("https://www.waseda.jp/top/en/");
    }
  }
};
</script>

<style scoped lang="scss">
.univname {
  color: white;
  background-color: darkred;
  max-width: 100%;
  font-size: 1.4em;
  padding: 10px 0px 10px 0px;
}
.logo {
  padding: 0px 0px 0px 0px;
}
.pointer {
  cursor: pointer;
}
</style>