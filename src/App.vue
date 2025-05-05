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
        Nhưng thôi cứ đọc thư đi 😎
      </h3>
      <span class="flex flex-col gap-2 text-justify">
        <p>
          Hì tui làm thêm cái web lặt vặt chúc mừng sinh nhật em yêu lena 👽
        </p>
        <p>
          Lena tuổi mới trước hết là thật mạnh khỏe đã ạ. Sức khỏe tốt còn để
          đạt được ti tỉ mục tiêu nữa 💪
        </p>
        <p>
          Hơn nữa là chúc Lena ngày càng xinh đẹp. Xinh rồi mà xinh nữa hê hê.
          Còn phải tài sắc vẹn toàn nữa nên là chúc Lena học hành làm việc giỏi
          giang chăm chỉ. Học đâu thuận đó, thi cử gì cũng perfect 🤓
        </p>
        <p>
          Và đặc biệt là chúc Lena thật hạnh phúc ạ. Dù làm gì thì cũng phải cảm
          thấy hạnh phúc và hài lòng, không vướng bận và không hối hận 🎈
        </p>
        <p>
          Lần nữa happy birthday ạ, hi vọng Lena thích nha hehe. Món quả nhỏ
          hoan hỉ hoan hỉ. love you 💞
        </p>
        <div class="flex flex-col items-center self-end pr-8">
          <img
            src="./assets/oia-uia.gif"
            alt="oiia"
            class="object-fit h-20 w-20"
          />
          <p class="font-writing-italic">long lò</p>
        </div>
      </span>
    </div>
  </div>
</template>
