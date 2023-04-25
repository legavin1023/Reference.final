<template>
  <div class="gameBox">
    <div class="gameBackBox">
      <router-link to="/reference.final">
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 17.0448L0.288479 8.99999L8.33333 0.955139L9.516 2.13781L2.65383 8.99999L9.516 15.8622L8.33333 17.0448Z"
            fill="#4F4F4F"
          />
        </svg>
        5mok.jpg
      </router-link>
    </div>
    <div class="gameNameBox"><p>5mok.jpg</p></div>
    <div class="myName">
      <svg
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9344 8.40001C11.0867 8.40001 11.1309 8.23022 11.1309 8.23022L11.9982 2.85394C12.0523 2.56019 11.7829 2.71503 11.7829 2.71503L8.42365 4.86694C8.15472 5.03921 8.03017 4.74445 8.03017 4.74445L6.1248 1.06401C6.1248 1.06401 6.05038 0.904683 5.97793 1.05903L4.07058 4.74445C4.07058 4.74445 3.94604 5.03921 3.6771 4.86694L0.316903 2.71503C0.316903 2.71503 0.0469752 2.56019 0.101556 2.85394L0.9684 8.23022C0.9684 8.23022 1.01306 8.40001 1.16539 8.40001H10.9349H10.9344Z"
          fill="#DBDBDB"
        />
      </svg>
      <span>이름</span>
    </div>
    <div class="nameBox nameBoxJoin">
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
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
