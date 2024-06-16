<template>
  <div class="w-full flex justify-center p-4 md:p-0 mb-0 md:mb-8">
    <div class="w-full md:w-4/5 flex">
      <div
        class="w-28 md:w-52 h-28 md:h-52 flex items-center bg-white rounded-full p-1.5 -mt-16 md:-mt-24 shadow-lg"
      >
        <img
          src="/assets/javadoladi.webp"
          alt="profile"
          class="w-full h-full rounded-full object-cover"
        />
      </div>
      <div class="w-2/3 pl-4 -mt-14 md:-mt-16">
        <h1 class="text-2xl md:text-4xl text-white font-bold mb-5 md:mb-10">
          {{ data.users[0].name }}
        </h1>
        <p class="text-sm md:text-md md:text-lg text-aradFontGray">
          Head of International Marketing and Development
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
