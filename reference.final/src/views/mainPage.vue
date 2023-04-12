<template>
  <div class="bodyBox">
    <div class="dropdown">
      <button
        class="dropdown-toggle"
        @click="showCreditModal = !showCreditModal"
      >
        credit <span> ▼ </span>
      </button>
      <div
        class="modal-overlay"
        v-show="showCreditModal"
        @click="showCreditModal = !showCreditModal"
      ></div>
      <ul class="showCreditModal" v-show="showCreditModal">
        <li>
          <span>team</span>
          <p>NugBug</p>
        </li>
        <li>
          <span>planner</span>
          <p>김쌍자</p>
        </li>
        <li>
          <span>designer</span>
          <p>홍게</p>
        </li>
        <li>
          <span>Developer</span>
          <p>옥시/백엔ㅎㅎ</p>
        </li>
      </ul>
    </div>
    <div>
      <p>Reference.final</p>
      <p>by team.NugBug</p>
    </div>
    <div><input type="text" placeholder="닉네임을 입력하세요" /></div>
    <div>
      <label for="Ewxel"><span></span> 5mok.jpg</label>
      <input
        type="radio"
        name="game"
        value="5mok"
        id="5mok"
        v-model="selectedPage"
      />
      <label for="Adude"><span></span> bingo.pdf</label>
      <input
        type="radio"
        name="game"
        value="bingo"
        id="bingo"
        v-model="selectedPage"
      />
    </div>
    <div>
      <input type="button" @click="start" value="->" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPage: "",
      showCreditModal: false,
    };
  },
  methods: {
    start() {
      if (this.selectedPage) {
        this.$router.push({ name: this.selectedPage });
      }
    },
  },
};
</script>
