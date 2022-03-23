<script setup lang="ts"></script>

<template>
  <footer class="w-full h-[100px] bg-[#eb5757] mt-auto flex justify-between">
    <div class="flex items-center gap-5 w-[280px]">
      <img src="/img/album.png" alt="album" width="100" height="100" />
      <div class="text-white space-y-2">
        <h1 class="text-sm font-bold">Canción</h1>
        <h2 class="text-sm">Artista - Álbum</h2>
      </div>
    </div>
    <div class="flex items-center gap-2 text-white">
      <button class="p-5 rounded-full hover:bg-[#FF7676]/70">
        <i class="fa-solid fa-backward-step fa-xl"></i>
      </button>
      <button
        class="group w-16 h-16 p-5 rounded-full bg-[#FF7676] hover:bg-[#FF7676]/70"
      >
        <i class="group-hover:hidden fa-solid fa-play fa-xl"></i>
        <i class="!hidden group-hover:!inline fa-solid fa-pause fa-xl"></i>
      </button>
      <button class="p-5 rounded-full hover:bg-[#FF7676]/70">
        <i class="fa-solid fa-forward-step fa-xl"></i>
      </button>
    </div>
    <div class="flex items-center gap-5 mx-8">
      <button
        class="flex justify-start items-center w-[1.875rem] h-[1.875rem] group text-white"
      >
        <i class="group-hover:hidden fa-solid fa-volume-high fa-xl"></i>
        <i
          class="!hidden group-hover:!inline fa-solid fa-volume-xmark fa-xl left-0"
        ></i>
      </button>
      <input
        class="volume-slider"
        type="range"
        name="volume"
        min="0"
        max="100"
        value="100"
      />
    </div>
  </footer>
</template>

<style scoped>
.volume-slider {
  -webkit-appearance: none;
  @apply h-[0.375rem] rounded-full;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply w-5 h-5 rounded-full bg-white;
}
</style>
