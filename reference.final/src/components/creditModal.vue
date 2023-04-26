<template>
  <div v-if="showModalCradit" class="modalBox">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-content">
      <ul class="showCreditModal">
        <li>
          <p>team</p>
          <p>NugBug</p>
        </li>
        <li>
          <span>planner</span>
          <p>아델.lee</p>
        </li>
        <li>
          <span>designer</span>
          <p>홍게</p>
        </li>
        <li>
          <span>Developer</span>
          <p>Oxy / Endian</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModalCradit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:showModalCredit", false);
    },
  },
};
</script>

<style></style>
