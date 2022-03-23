<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      musicList: [
        {
          img: "img/album.png",
          name: "example",
          artist: "example",
          music: "eleven.mp3",
        },
        {
          img: "img/album.png",
          name: "example",
          artist: "example",
          music: "takeit.mp3",
        },
      ],
      trackIndex: 0,
      isPlaying: false,
      muted: false,
      currTrack: document.createElement("audio"),
    };
  },
  mounted() {
    this.loadTrack(this.trackIndex);
  },
  methods: {
    loadTrack(trackIndex: number) {
      this.currTrack.src = this.musicList[trackIndex].music;
      this.currTrack.load();
      this.currTrack.addEventListener("ended", this.nextTrack);
    },
    playTrack() {
      this.currTrack.play();
      this.isPlaying = true;
    },
    pauseTrack() {
      this.currTrack.pause();
      this.isPlaying = false;
    },
    nextTrack() {
      if (this.trackIndex < this.musicList.length - 1) {
        this.trackIndex++;
      } else {
        this.trackIndex = 0;
      }
      this.loadTrack(this.trackIndex);
      this.playTrack();
    },
    prevTrack() {
      if (this.trackIndex > 0) {
        this.trackIndex--;
      } else {
        this.trackIndex = this.musicList.length - 1;
      }
      this.loadTrack(this.trackIndex);
      this.playTrack();
    },
    setVolume() {
      this.currTrack.volume =
        +(this.$refs.volume as HTMLInputElement).value / 100;
      this.muted = this.currTrack.volume === 0;
    },
    mute() {
      const volumeEl = this.$refs.volume as HTMLInputElement;
      if (this.currTrack.volume !== 0) {
        this.currTrack.volume = 0;
        this.muted = true;
        volumeEl.value = "0";
      } else {
        this.currTrack.volume = 1;
        this.muted = false;
        volumeEl.value = "100";
      }
    },
  },
});
</script>

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
      <button
        class="p-5 rounded-full hover:bg-[#FF7676]/70 active:bg-[#FF7676]/90"
        @click="prevTrack"
      >
        <i class="fa-solid fa-backward-step fa-xl"></i>
      </button>
      <button
        class="w-16 h-16 p-5 rounded-full bg-[#FF7676] hover:bg-[#FF7676]/70 active:bg-[#FF7676]/90"
        @click="isPlaying ? pauseTrack() : playTrack()"
      >
        <i v-if="!isPlaying" class="fa-solid fa-play fa-xl"></i>
        <i v-if="isPlaying" class="fa-solid fa-pause fa-xl"></i>
      </button>
      <button
        class="p-5 rounded-full hover:bg-[#FF7676]/70 active:bg-[#FF7676]/90"
        @click="nextTrack"
      >
        <i class="fa-solid fa-forward-step fa-xl"></i>
      </button>
    </div>
    <div class="flex items-center gap-5 mx-8">
      <button
        v-if="!muted"
        class="flex justify-start items-center w-[1.875rem] h-[1.875rem] group text-white"
        @click="mute"
      >
        <i class="group-hover:hidden fa-solid fa-volume-high fa-xl left-0"></i>
        <i
          class="!hidden group-hover:!inline fa-solid fa-volume-xmark fa-xl left-0"
        ></i>
      </button>
      <button
        v-else
        class="flex justify-start items-center w-[1.875rem] h-[1.875rem] group text-white"
        @click="mute"
      >
        <i class="group-hover:hidden fa-solid fa-volume-xmark fa-xl left-0"></i>
        <i
          class="!hidden group-hover:!inline fa-solid fa-volume-high fa-xl left-0"
        ></i>
      </button>
      <input
        ref="volume"
        class="volume-slider"
        type="range"
        name="volume"
        min="0"
        max="100"
        value="100"
        @input="setVolume"
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
