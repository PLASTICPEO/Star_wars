<template>
  <div class="w-full h-screen flex justify-center items-center bg-[#E0A100]">
    <div class="flex-col font-amatic text-3xl font-bold">
      <ul class="flex justify-center items-center flex-col mb-2.5">
        <li class="m-2.5" v-for="people in data" @click="moreInfo(people)">
          Hunter: {{ people.name }}
        </li>
      </ul>
      <div v-if="selectedValid" class="absolute left-[5%] top-[5%]">
        <ul>
          <li>Name: {{ selectedValid.name }}</li>
          <li>Height: {{ selectedValid.height }} cm</li>
          <li>Mass: {{ selectedValid.mass }} kg</li>
        </ul>
      </div>

      <div class="flex justify-center items-center space-x-8">
        <button
          class="border-2 border-emerald-900 px-8 hover:bg-[#FDE74C]"
          @click="nextPage()"
        >
          Next
        </button>
        <button
          class="border-2 border-emerald-900 px-8 hover:bg-[#FDE74C]"
          @click="prevPage()"
        >
          Prev
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDemo } from "../people/useDemo";

const { nextPage, prevPage, moreInfo, selectedValid, data } = useDemo();
</script>
