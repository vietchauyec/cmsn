<script setup lang="ts">
import { differenceInCalendarDays } from 'date-fns';

var message = '';
const birthyear = 2004;
const today = new Date();
const birthday = new Date(new Date().getFullYear(), 5, 5);

if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}

const days = differenceInCalendarDays(birthday, today);
if (days === 0) {
  message = `Chúc mừng sinh nhật thứ ${today.getFullYear() - birthyear} của Lena!!!`;

} else { 
  message = `Còn ${days} ngày mới tới sinh nhật cơ 😟`;
}

</script>

<template>
  <h1>{{ message }}</h1>
  <!-- TODO: make confetti -->
</template>
