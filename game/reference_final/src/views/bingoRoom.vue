<template>
  <div>
    <div class="skinBox backBox">
      <button @click="back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_403_75"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_403_75)">
            <path
              d="M13.3333 18.0448L5.28848 9.99999L13.3333 1.95514L14.516 3.13781L7.65384 9.99999L14.516 16.8622L13.3333 18.0448Z"
              fill="#4F4F4F"
            />
          </g>
        </svg>
        <span>bingo.pdf</span>
      </button>
    </div>
    <div class="bodyBox">
      <div class="title gameTitle">
        <div>
          <div>
            <p>bingo.pdf</p>
            <!-- <p>bingo.pdf</p> -->
          </div>
        </div>
      </div>
      <div class="nameBox firstUser">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
        >
          <g clip-path="url(#clip0_403_238)">
            <path
              d="M11.9344 8.40001C12.0867 8.40001 12.1309 8.23022 12.1309 8.23022L12.9982 2.85394C13.0523 2.56019 12.7829 2.71503 12.7829 2.71503L9.42365 4.86694C9.15472 5.03921 9.03017 4.74445 9.03017 4.74445L7.1248 1.06401C7.1248 1.06401 7.05038 0.904683 6.97793 1.05903L5.07058 4.74445C5.07058 4.74445 4.94603 5.03921 4.6771 4.86694L1.3169 2.71503C1.3169 2.71503 1.04698 2.56019 1.10156 2.85394L1.9684 8.23022C1.9684 8.23022 2.01306 8.40001 2.16539 8.40001H11.9349H11.9344Z"
              fill="#DBDBDB"
            />
          </g>
          <defs>
            <clipPath id="clip0_403_238">
              <rect width="14" height="8.4" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>옥시폭시</p>
      </div>
      <div class="nameBox secund">
        <button>초대 URL 복사</button>
      </div>
    </div>
    <div class="loading-container">
      <img
        v-if="currentImageIndex === 0"
        src="@/assets/image/loding/Property 1=Default.svg"
        alt="Loading Image 1"
      />
      <img
        v-if="currentImageIndex === 1"
        src="@/assets/image/loding/Property 1=Variant2.svg"
        alt="Loading Image 2"
      />
      <img
        v-if="currentImageIndex === 2"
        src="@/assets/image/loding/Property 1=Variant3.svg"
        alt="Loading Image 3"
      />
      <img
        v-if="currentImageIndex === 3"
        src="@/assets/image/loding/Property 1=Variant4.svg"
        alt="Loading Image 4"
      />
      <p>친구 기다리는중...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      currentImageIndex: 0, // 현재 표시할 이미지의 인덱스
    };
  },
  mounted() {
    // 이미지를 순환하면서 애니메이션을 추가
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % 4;
    }, 200); // 이미지 변경 간격(ms)을 조절할 수 있습니다.
  },
  methods: {
    back() {
      this.$router.push({ path: "reference.final" });
      console.log(5);
    },
  },
};
</script>

<style></style>
