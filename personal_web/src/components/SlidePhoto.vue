<template>
  <div>
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
        <b-carousel-slide caption="First slide" text=" ">
          <template v-slot:img>
            <img
              @click="test"
              class="d-block img-fluid w-100 pointer"
              alt="image slot"
              width="1024"
              height="240"
              src="https://picsum.photos/1024/240/?image=55"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide caption="First slide" text=" ">
          <template v-slot:img>
            <img
              @click="test"
              class="d-block img-fluid w-100 pointer"
              alt="image slot"
              width="1024"
              height="240"
              src="https://picsum.photos/1024/240/?image=54"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide caption="First slide" text=" ">
          <template v-slot:img>
            <img
              @click="test"
              class="d-block img-fluid w-100 pointer"
              alt="image slot"
              width="1024"
              height="240"
              src="https://picsum.photos/1024/240/?image=58"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              @click="test"
              class="d-block img-fluid w-100"
              width="1024"
              height="240"
              src="https://picsum.photos/1024/240/?image=59"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    test: function() {
    }
  }
};
</script>
<style scoped lang="scss">
.nopadding {
  padding: 0px 0px 0px 0px;
}
.pointer {
  cursor: pointer;
}
</style>