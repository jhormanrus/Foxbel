<script setup lang="ts"></script>

<template>
  <main class="grow justify-center max-h-[calc(100vh-100px)] overflow-auto">
    <div class="flex flex-col gap-10 px-10 py-[1.875rem]">
      <!-- header -->
      <div class="flex items-center">
        <div class="flex w-[32.75rem]">
          <input
            class="w-full leading-[1.375rem] text-lg px-4 py-1.5 border border-[#828282] border-r-0 rounded-l-[100px] placeholder:text-[#BDBDBD]"
            type="text"
            name="buscar"
            placeholder="Buscar"
          />
          <button
            class="border border-[#808080] border-l-0 px-4 rounded-r-full text-[#BDBDBD]"
          >
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
          </button>
        </div>
        <button class="hover:underline space-x-3 ml-auto">
          <span><i class="fa-solid fa-user fa-sm text-[#E86060]"></i></span>
          <span class="ml-auto">Francisco M.</span>
        </button>
      </div>
      <!-- portada -->
      <div class="flex self-center max-w-[970px] w-full">
        <div class="relative w-[250px] h-[250px] text-white">
          <img
            class="absolute w-full h-full"
            src="/img/album.png"
            alt="album"
          />
          <span
            class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
          >
            <i class="fa-solid fa-play fa-5x"></i>
          </span>
        </div>
        <div class="relative grow">
          <img
            src="/img/portada.png"
            alt="portada"
            class="w-full h-full absolute"
          />
          <div
            class="flex flex-col bg-[#a70000]/0 w-full h-full absolute px-8 py-[1.375rem] text-white"
          >
            <h1 class="text-[1.375rem] font-bold mt-[1.125rem]">Adele 21</h1>
            <div class="flex items-center gap-4">
              <span class="text-sm">Lo mejor de Adele</span>
              <span class="text-[0.625rem] text-[#662323]"
                >321, 123 seguidores</span
              >
            </div>
            <p class="text-xs mt-5">
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1988), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentista británica.
            </p>
            <div class="flex mt-auto gap-5">
              <button class="btn btn--default">Reproducir</button>
              <button class="btn btn--default-outline">Seguir</button>
              <button class="btn">
                <i class="fa-solid fa-ellipsis fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- resultados -->
      <div class="space-y-5">
        <h1 class="text-[#E86060] text-[1.375rem] font-bold">Resultados</h1>
        <div
          class="grid gap-x-[1.375rem] gap-y-6 justify-between"
          style="grid-template-columns: repeat(auto-fit, 160px)"
        >
          <div
            v-for="i of [, , , , , , , , ,]"
            :key="i"
            class="max-w-[160px] space-y-2"
          >
            <div class="relative w-[160px] h-[160px] text-white">
              <img
                class="absolute w-full h-full"
                src="/img/album.png"
                alt="adele"
              />
              <span
                class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
              >
                <i class="fa-solid fa-play fa-2xl"></i>
              </span>
              <span class="absolute right-0 px-2 py-1">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <div>
              <h1 class="text-sm text-[#555555] font-bold">21</h1>
              <h2 class="text-xs text-[#828282]">Adele</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn {
  @apply text-sm leading-[1.125rem] rounded-[100px] py-1.5;
}

.btn--default {
  @apply bg-[#E86060] min-w-[7.312rem];
}

.btn--default-outline {
  @apply border border-[#E86060] text-[#E86060] min-w-[7.312rem];
}
</style>
