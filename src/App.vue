<script setup lang="ts">
import { differenceInCalendarDays } from "date-fns";
import particleOptions from "./assets/config/particles.json";
import { ref } from "vue";

const message = "Lời Chúc Từ Những Trái Cam Đáng Yêu 🥰"

const showSubmitMsg = ref(false);
const submit = (e: any) => {
  e.preventDefault();
  const wish = e.target[0].value;
  const url = "https://message-box-znwn.shuttle.app/send"; 
  fetch(url, {
    method: "POST",
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
    :options="particleOptions"
    class="pointer-events-none"
  />
  <section
    class="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-12"
    id="section-birthday"
  >
    <div class="flex h-fit w-full flex-row items-center gap-8 max-md:flex-col">
      <div
        class="flex h-full w-full flex-col items-center self-stretch rounded-md border-2 border-orange-300 bg-orange-200 p-8 text-center md:max-w-2/3"
      >
        <h1 class="mb-4 text-xl font-semibold">{{ message }}</h1>
        <span class="flex flex-col gap-2 text-justify">
          <p>
            hehe, chúc mừng 2 chị đã chính thức kết thúc hành trình sinh viên đầy kỉ niệm, bước vào hành trình thất nghiệp đầy kịch tính❤️❤️
          </p>
          <p>
            Lá thư này là lời cảm ơn của BCM thế hệ thứ 22 gửi tới 2 chị.
          </p>
          <p>
            Chúng em cám ơn 2 chị đã đồng hành cùng chúng em từ những bước chân đầu vào đại học.
          </p>
          <p>
            Cám ơn 2 chị vì đã mang tới 1 môi trường BCM đầy niềm vui. 
          </p>
          <p>
            Cám ơn 2 chị luôn quan tâm và bảo vệ ban trong suốt nhiệm kì.
          </p>
          <p>
            Và, cám ơn 2 chị vì đã ở đây tới thời điểm hiện tại, cùng chúng em bước tiếp❤️
          </p>
          <p>
            Tương lai thì không nói trước được, nhưng bọn em tin là với những gì 2 chị đã và đang cố gắng, chắc chắn sẽ có được những thành công xứng đáng với nỗ lực của mình.
          </p>
          <p>
            Biết ơn và trân trọng.
          </p>

          <div class="flex flex-col items-center self-end pr-8">
            <img
              src="./assets/yec.jpg"
              alt="oiia"
              class="object-fit h-20 w-20"
            />
            <p class="font-writing-italic">Ban Chuyên Môn 22nd 🍊</p>
          </div>
        </span>
      </div>
      <div
        class="flex h-auto w-full flex-col items-center gap-4 self-stretch rounded-md border-2 border-orange-300 bg-orange-200 p-8 text-center md:max-w-1/3"
      >
        <h1 class="text-xl font-semibold">Gửi lời nhắn của các chị vào đây</h1>
        <form
          v-on:submit.prevent
          @submit="submit"
          class="flex h-full min-h-40 w-full grow flex-col gap-4"
        >
          <textarea
            class="h-full w-full grow resize-none rounded-md border-2 border-orange-300 bg-orange-100 p-2"
            placeholder=""
          ></textarea>
          <button
            type="submit"
            class="mt-2 cursor-pointer rounded-md bg-orange-300 p-2"
          >
            Gửi lời nhắn
          </button>
          <p v-show="showSubmitMsg" class="font-writing-italic">
            Chúng em nhận được rồi ạ, cảm ơn các chị ❤️
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
