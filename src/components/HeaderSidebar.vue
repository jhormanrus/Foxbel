<script setup lang="ts"></script>

<template>
  <header
    class="hidden md:flex w-[330px] px-10 py-[3.125rem] flex-col gap-[1.875rem] items-center bg-[#662323] text-white"
  >
    <img src="/img/foxbel-music.png" alt="logo" width="250" height="59" />
    <div class="w-full space-y-1">
      <h2 class="text-[1.375rem] font-bold">Mi librería</h2>
      <ul class="leading-5 space-y-2">
        <li class="active-link">Recientes</li>
        <li>Artistas</li>
        <li>Álbums</li>
        <li>Canciones</li>
        <li>Estaciones</li>
      </ul>
    </div>
    <div class="w-full space-y-1">
      <h2 class="text-[1.375rem] font-bold">Playlist</h2>
      <ul class="leading-5 space-y-2">
        <li>Metal</li>
        <li>Para bailar</li>
        <li>Rock 90s</li>
        <li>Baladas</li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.active-link {
  @apply font-bold text-[#E86060] relative after:block after:absolute after:left-[-2.5rem] after:top-0 after:w-[0.312rem] after:h-5 after:bg-[#E86060];
}
</style>
