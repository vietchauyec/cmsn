<script setup lang="ts">
import { differenceInCalendarDays } from "date-fns";
import particleOptions from "./assets/config/particles.json";

var message = "";
const birthyear = 2004;
const today = new Date();
const birthday = new Date(new Date().getFullYear(), 5, 5);

if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}

var days = differenceInCalendarDays(birthday, today);
if (import.meta.env.MODE === "development") {
  days = 0; // for testing purposes
}
if (days === 0) {
  message = `Chúc mừng sinh nhật thứ ${today.getFullYear() - birthyear} của Lena!!!`;
} else {
  message = `Còn ${days} ngày mới tới sinh nhật cơ 🥺`;
}
</script>

<template>
  <vue-particles v-if="days === 0" :options="particleOptions" />
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <div
      class="flex max-w-2/3 flex-col items-center rounded-md border-2 border-rose-300 bg-rose-200 p-8 text-center"
    >
      <h1 class="text-xl font-semibold">{{ message }}</h1>
      <h3 v-if="days !== 0" class="font-writing-italic mb-4">
        Nhưng thôi cứ đọc thư đi, hì 😎
      </h3>
      <span class="flex flex-col gap-2 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque facilis ratione officia voluptatum accusantium tempore nostrum
          exercitationem iste sed assumenda sint natus, tenetur vitae temporibus
          labore autem rem aliquid!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fuga
          animi perferendis praesentium tenetur alias hic eaque nostrum unde
          doloribus, consectetur ducimus ea porro pariatur ipsum aliquam iusto
          enim delectus.
        </p>
        <p class="font-writing-italic self-end pr-8">cool signature</p>
      </span>
    </div>
  </div>
</template>
