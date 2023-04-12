<template>
  <div id="app" v-bind:class="selectedSkin">
    <nav>
      <span v-if="selectedSkin === 'Ewxel'">
        <span class="skinLogo">로고</span> 통합문서1 -game
      </span>
      <span v-if="selectedSkin === 'Adude'">
        <span class="skinLogo">로고</span> Untitled-1 @ 99.9% (GAME/18)
      </span>
      <span v-if="selectedSkin === 'Simple'">
        <span class="skinLogo">로고</span> 제목없음 - i want to go home 메모장
      </span>
      <span @click="showBugModal = !showBugModal">벌레잡기</span>
    </nav>
    <div
      class="modal-overlay"
      v-show="showBugModal"
      @click="showBugModal = !showBugModal"
    ></div>
    <div class="nugbugReport" v-show="showBugModal">
      <button @click="showBugModal = !showBugModal">x</button>
      <p>버그를 발견하셨나요?</p>
      <p>이쪽으로 메일을 남겨주세요!</p>
      <p>nugbugreport@gmail.com</p>
    </div>
    <div v-if="$route.meta.showSkinButtons">
      <div>
        <p>스킨을 선택하세요</p>
        <label for="Ewxel">Ewxel</label>
        <input
          type="radio"
          name="skin"
          value="Ewxel"
          id="Ewxel"
          v-model="selectedSkin"
        />
        <label for="Adude">Adude</label>
        <input
          type="radio"
          name="skin"
          value="Adude"
          id="Adude"
          v-model="selectedSkin"
        />
        <label for="Simple">Simple</label
        ><input
          type="radio"
          name="skin"
          value="Simple"
          id="Simple"
          v-model="selectedSkin"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedSkin: "Ewxel",
      showBugModal: false,
    };
  },
  computed: {
    skin() {
      console.log(this.selectedSkin);

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
};
</script>
