<script setup lang="ts">
import HeaderSidebar from "./components/HeaderSidebar.vue";
import FooterPlayer from "@/components/FooterPlayer.vue";
import MainContainer from "./components/MainContainer.vue";

import { ref } from "vue";

let albumId = ref(null as unknown as number);

function getAlbum(_albumId: number) {
  albumId.value = _albumId;
}
</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex grow">
      <HeaderSidebar />
      <MainContainer @to-play="getAlbum($event)" />
    </div>
    <FooterPlayer :album-id="albumId" />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
