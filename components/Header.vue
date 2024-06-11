<script>
import meetingImage from "~/assets/wide-picture.jpg";

export default {
  data() {
    return {
      meetingImage,
    };
  },
};
</script>

<template>
  <header
    class="w-full h-48 md:h-64 justify-center items-center bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${meetingImage})` }"
  >
    <div
      class="w-full h-full bg-gradient-to-b from-transparent via-70% to-black/[0.8]"
    ></div>
  </header>
</template>
