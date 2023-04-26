<template>
  <div v-if="showModalBug" class="modalBoxBug">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="nugbugReport">
      <button class="closeButton" @click="$emit('close')">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.73335 9.08329L0.916687 8.26663L4.18335 4.99996L0.916687 1.73329L1.73335 0.916626L5.00002 4.18329L8.26669 0.916626L9.08335 1.73329L5.81669 4.99996L9.08335 8.26663L8.26669 9.08329L5.00002 5.81663L1.73335 9.08329Z"
            fill="#999999"
          />
        </svg>
      </button>
      <p>버그를 발견하셨나요?</p>
      <p>이쪽으로 메일을 남겨주세요!</p>
      <p class="email">nugbugreport@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModalBug: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
