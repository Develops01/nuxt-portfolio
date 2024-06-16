<script setup>
import data from "../../server/data.json";
</script>
<template>
  <Profile :data="data" />
  <div class="w-full flex justify-center p-4 md:p-0">
    <div class="w-full md:w-4/5 flex flex-wrap items-start">
      <AboutMe />
      <ContactMe />
    </div>
  </div>
  <MyVideos />
  <MyPhotos />
</template>
