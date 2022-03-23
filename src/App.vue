<script setup lang="ts">
import HeaderSidebar from "./components/HeaderSidebar.vue";
import FooterPlayer from "@/components/FooterPlayer.vue";
import MainContainer from "./components/MainContainer.vue";
</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex grow">
      <HeaderSidebar />
      <MainContainer />
    </div>
    <FooterPlayer />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
