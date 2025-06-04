<script setup lang="ts">
import { differenceInCalendarDays } from "date-fns";
import particleOptions from "./assets/config/particles.json";
import { ref } from "vue";

var message = "";
const birthyear = 2004;
const today = new Date();
today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate date comparison
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

const showSubmitMsg = ref(false);
const submit = (e: any) => {
  e.preventDefault();
  const wish = e.target[0].value;
  const url = "https://message-box-o9gg.shuttle.app/send";
  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      msg: wish,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Wish sent successfully");
        showSubmitMsg.value = true;
      } else {
        console.error("Error sending wish");
      }
    })
    .catch((_) => {
      console.error("Error sending wish");
    });
};
</script>

<template>
  <vue-particles
    id="tsparticles-bday"
    v-if="days === 0"
    :options="particleOptions"
    class="pointer-events-none"
  />
  <section
    class="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-12"
    id="section-birthday"
  >
    <div class="flex h-fit w-full flex-row items-center gap-8 max-md:flex-col">
      <div
        class="flex h-full w-full flex-col items-center self-stretch rounded-md border-2 border-rose-300 bg-rose-200 p-8 text-center md:max-w-2/3"
      >
        <h1 class="mb-4 text-xl font-semibold">{{ message }}</h1>
        <h3 v-if="days !== 0" class="font-writing-italic mb-4">
          Nhưng thôi cứ đọc thư đi 😎 Ngày sinh nhật vào đọc lại thì web đẹp hơn
          xíu
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
            Còn phải tài sắc vẹn toàn nữa nên là chúc Lena học hành làm việc
            giỏi giang chăm chỉ. Học đâu thuận đó, thi cử gì cũng perfect 🤓
          </p>
          <p>
            Và đặc biệt là chúc Lena thật hạnh phúc ạ. Dù làm gì thì cũng phải
            cảm thấy hạnh phúc và hài lòng, không vướng bận và không hối hận 🎈
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
      <div
        class="flex h-auto w-full flex-col items-center gap-4 self-stretch rounded-md border-2 border-rose-300 bg-rose-200 p-8 text-center md:max-w-1/3"
      >
        <h1 class="text-xl font-semibold">Viết điều ước sinh nhật vô đây nè</h1>
        <form
          v-on:submit.prevent
          @submit="submit"
          class="flex h-full min-h-40 w-full grow flex-col gap-4"
        >
          <textarea
            class="h-full w-full grow resize-none rounded-md border-2 border-rose-300 bg-rose-100 p-2"
            placeholder="Viết điều ước ở đây"
          ></textarea>
          <button
            type="submit"
            class="mt-2 cursor-pointer rounded-md bg-rose-300 p-2"
          >
            Gửi điều ước
          </button>
          <p v-show="showSubmitMsg" class="font-writing-italic">
            Yay nhận được òi, lena thích gì gửi tiếp i 😍
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
