<script lang="ts">
import type { Datum } from "@/models/search-album.model";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    album: {
      type: Object as () => Datum,
      required: true,
    },
  },
  emits: ["toPlay"],
});
</script>

<template>
  <div :key="album.id" class="max-w-[160px] space-y-2">
    <div class="relative w-[160px] h-[160px] text-white">
      <img
        class="absolute w-full h-full"
        :src="album.cover_medium"
        alt="adele"
      />
      <button
        type="button"
        class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] hover:scale-125 transition"
        @click="$emit('toPlay', album.id)"
      >
        <i class="fa-solid fa-play fa-2xl"></i>
      </button>
      <button type="button" class="absolute right-0 px-2 py-1">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
    <div>
      <h1 class="text-sm text-[#555555] font-bold">
        {{ album.title }}
      </h1>
      <h2 class="text-xs text-[#828282]">{{ album.artist.name }}</h2>
    </div>
  </div>
</template>
