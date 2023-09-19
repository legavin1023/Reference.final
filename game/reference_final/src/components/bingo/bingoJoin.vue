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
        <p>{{ filstUserName }}</p>
      </div>
      <div class="nameBox">
        <input
          v-model="userName"
          type="text"
          placeholder="닉네임을 입력하세요"
          :class="{ userNameNo: !userName }"
        />

        <svg
          class="check"
          :class="{ userNameNo: !userName }"
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
      <div class="startBox">
        <button @click="start" :disabled="userName === ''">
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
</template>
<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    roomCode() {
      return this.$route.query.roomCode;
    },
    filstUserName() {
      return this.$route.query.filstUserName;
    },
  },
  methods: {
    async start() {
      const payload = {
        uuid: this.$route.query.roomCode,
        userName: this.userName,
      };
      console.log(payload);
      await this.$store.dispatch("secondId", payload);
      await this.$store.dispatch("startBingoGame", payload);
      this.$router.push({
        path: "/bingoGame",
        // query: { user: payload.uuid }, // query를 사용하여 uuid 값을 전달
      });
    },
  },
};
</script>
