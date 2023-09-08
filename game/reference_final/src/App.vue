<template>
  <div id="app" :class="selectedSkin">
    <div v-if="$route.meta.showNav">
      <nav :class="{ black: selectedSkin === 'Adude' }">
        <span v-if="selectedSkin === 'Ewxel'">
          <span class="skinLogo">로고</span> 통합문서1 -game
        </span>
        <span v-if="selectedSkin === 'Adude'">
          <span class="skinLogo">로고</span> Untitled-1 @ 99.9% (GAME/18)
        </span>
        <span v-if="selectedSkin === 'Simple'">
          <span class="skinLogo">로고</span> 제목없음 - i want to go home 메모장
        </span>
        <span class="bug" @click="showBugModal = !showBugModal">벌레잡기</span>
      </nav>
      <div
        v-show="showBugModal"
        class="modal-overlay"
        @click="showBugModal = !showBugModal"
      ></div>

      <div v-show="showBugModal" class="nugbugReport">
        <button @click="showBugModal = !showBugModal">x</button>
        <p>버그를 발견하셨나요?</p>
        <p>이쪽으로 메일을 남겨주세요!</p>
        <p class="email">nugbugreport@gmail.com</p>
      </div>
      <div v-if="$route.meta.showSkinButtons" class="skinBox">
        <div>
          <p>스킨을 선택하세요</p>
          <div>
            <input
              id="Ewxel"
              v-model="selectedSkin"
              type="radio"
              name="skin"
              value="Ewxel"
            />
            <label for="Ewxel">Ewxel</label>
            <input
              id="Adude"
              v-model="selectedSkin"
              type="radio"
              name="skin"
              value="Adude"
            />
            <label for="Adude">Adude</label>
            <input
              id="Simple"
              v-model="selectedSkin"
              type="radio"
              name="skin"
              value="Simple"
            />
            <label for="Simple">Simple</label>
          </div>
        </div>
      </div>
    </div>
    <router-view :selected-skin="selectedSkin" />
  </div>
</template>
<script>
export default {
  beforeRouteUpdate: function (to, next) {
    if (to.path === "/") {
      document.getElementById("app").classList.add("noback");
    } else {
      document.getElementById("app").classList.remove("noback");
    }
    next();
  },
  data() {
    return {
      selectedSkin: "Ewxel",
      showBugModal: false,
      nobackCheck: false,
    };
  },
  computed: {
    skin() {
      switch (this.selectedSkin) {
        case "Ewxel":
          return "Ewxel";
        case "Adude":
          return "Adude";
        case "Simple":
          return "Simple";
        default:
          return "";
      }
    },
  },

  watch: {
    $route: function (to) {
      if (to.path === "/") {
        document.getElementById("app").classList.add("noback");
      } else {
        document.getElementById("app").classList.remove("noback");
      }
    },
  },
};
</script>
