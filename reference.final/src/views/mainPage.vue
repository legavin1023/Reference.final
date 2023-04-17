<template>
  <div>
    <div class="dropdown">
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
    <div class="bodyBox" v-bind:class="selectedSkinProps">
      <div class="title">
        <button
          class="dropdown-toggle"
          @click="showCreditModal = !showCreditModal"
        >
          credit
          <svg
            class="creditButton"
            width="7"
            height="5"
            viewBox="0 0 7 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.766663" width="6.1" height="1" fill="#C0CBBF" />
            <path d="M3.81666 5L6.86666 2H0.766663L3.81666 5Z" fill="#C0CBBF" />
          </svg>
        </button>
        <div>
          <div>
            <p>Reference.final</p>
            <p>by team.NugBug</p>
          </div>
        </div>
      </div>
      <div class="nameBox">
        <input
          type="text"
          placeholder="닉네임을 입력하세요"
          v-model="inputValue"
          v-bind:class="{ inputValueNo: !inputValue }"
        />

        <svg
          class="check"
          v-bind:class="{ inputValueNo: !inputValue }"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z"
            fill="#43A45E"
          />
        </svg>
      </div>
      <div class="gameBox">
        <div>
          <div>
            <input
              type="radio"
              name="game"
              value="5mok"
              id="5mok"
              v-model="selectedPage"
            />
            <label for="5mok"
              ><svg
                class="5mokIcon"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.87182 10C1.53506 10 1.25002 9.88333 1.01669 9.65C0.783354 9.41667 0.666687 9.13162 0.666687 8.79486V1.20516C0.666687 0.868408 0.783354 0.583364 1.01669 0.350031C1.25002 0.116697 1.53506 3.05176e-05 1.87182 3.05176e-05H12.1282C12.4649 3.05176e-05 12.75 0.116697 12.9833 0.350031C13.2167 0.583364 13.3333 0.868408 13.3333 1.20516V8.79486C13.3333 9.13162 13.2167 9.41667 12.9833 9.65C12.75 9.88333 12.4649 10 12.1282 10H1.87182ZM1.87182 9.00002H12.1282C12.1795 9.00002 12.2265 8.97865 12.2692 8.93591C12.312 8.89317 12.3333 8.84615 12.3333 8.79486V1.20516C12.3333 1.15387 12.312 1.10686 12.2692 1.06411C12.2265 1.02138 12.1795 1.00001 12.1282 1.00001H1.87182C1.82053 1.00001 1.77351 1.02138 1.73077 1.06411C1.68804 1.10686 1.66667 1.15387 1.66667 1.20516V8.79486C1.66667 8.84615 1.68804 8.89317 1.73077 8.93591C1.77351 8.97865 1.82053 9.00002 1.87182 9.00002ZM3.50004 7.66668H10.5513L8.35897 4.74363L6.48719 7.17951L5.15385 5.47441L3.50004 7.66668Z"
                  fill="#50895D"
                />
              </svg>
              5mok.jpg</label
            >
          </div>
          <div>
            <input
              type="radio"
              name="game"
              value="bingo"
              id="bingo"
              v-model="selectedPage"
            />
            <label for="bingo">
              <svg
                class="bingoIkon"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.88461 7.29489H5.47436V5.96155H6.21794C6.38546 5.96155 6.52564 5.90514 6.63846 5.79232C6.75128 5.67951 6.80769 5.53934 6.80769 5.37182V4.62822C6.80769 4.4607 6.75128 4.32053 6.63846 4.20772C6.52564 4.0949 6.38546 4.03849 6.21794 4.03849H4.88461V7.29489ZM5.47436 5.37182V4.62822H6.21794V5.37182H5.47436ZM7.48717 7.29489H8.79486C8.96238 7.29489 9.10255 7.23847 9.21537 7.12565C9.3282 7.01284 9.38461 6.87267 9.38461 6.70515V4.62822C9.38461 4.4607 9.3282 4.32053 9.21537 4.20772C9.10255 4.0949 8.96238 4.03849 8.79486 4.03849H7.48717V7.29489ZM8.07691 6.70515V4.62822H8.79486V6.70515H8.07691ZM10.1282 7.29489H10.7179V5.96155H11.5128V5.37182H10.7179V4.62822H11.5128V4.03849H10.1282V7.29489ZM4.37181 10.6667C4.03505 10.6667 3.75001 10.55 3.51669 10.3167C3.28336 10.0833 3.16669 9.79829 3.16669 9.46153V1.87184C3.16669 1.53508 3.28336 1.25004 3.51669 1.0167C3.75001 0.783369 4.03505 0.666702 4.37181 0.666702H11.9615C12.2983 0.666702 12.5833 0.783369 12.8166 1.0167C13.05 1.25004 13.1666 1.53508 13.1666 1.87184V9.46153C13.1666 9.79829 13.05 10.0833 12.8166 10.3167C12.5833 10.55 12.2983 10.6667 11.9615 10.6667H4.37181ZM4.37181 9.66669H11.9615C12.0128 9.66669 12.0598 9.64532 12.1026 9.60258C12.1453 9.55984 12.1667 9.51282 12.1667 9.46153V1.87184C12.1667 1.82055 12.1453 1.77353 12.1026 1.73079C12.0598 1.68805 12.0128 1.66669 11.9615 1.66669H4.37181C4.32052 1.66669 4.27351 1.68805 4.23077 1.73079C4.18803 1.77353 4.16666 1.82055 4.16666 1.87184V9.46153C4.16666 9.51282 4.18803 9.55984 4.23077 9.60258C4.27351 9.64532 4.32052 9.66669 4.37181 9.66669ZM2.03849 13C1.70175 13 1.41671 12.8833 1.18337 12.65C0.950041 12.4166 0.833374 12.1316 0.833374 11.7949V3.20517H1.83336V11.7949C1.83336 11.8461 1.85472 11.8932 1.89746 11.9359C1.9402 11.9786 1.98721 12 2.03849 12H10.6282V13H2.03849Z"
                  fill="#A5A5A5"
                />
              </svg>

              bingo.pdf</label
            >
          </div>
        </div>
      </div>
      <div class="startBox">
        <div>
          <button @click="start">
            <svg
              class="startButton"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
                fill="#338D5C"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedSkin"],
  data() {
    return {
      inputValue: "",
      selectedPage: "5mok",
      showCreditModal: false,
      selectedSkinProps: this.selectedSkin,
    };
  },
  updated() {
    console.log(this.selectedSkinProps);
  },
  methods: {
    start() {
      if (this.selectedPage) {
        this.$router.push({ name: this.selectedPage });
      }
    },
  },
  watch: {
    selectedSkin: function (newVal) {
      this.selectedSkinProps = newVal;
    },
  },
};
</script>
<style></style>
