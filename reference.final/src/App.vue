<template>
  <div id="app" v-bind:class="selectedSkin">
    <div v-if="$route.meta.showNav">
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
        <span class="bug" @click="showModalBug = true">벌레잡기</span>
        <bugModal
          :show-modal-bug="showModalBug"
          @close="showModalBug = false"
        />
      </nav>

      <div class="skinBox" v-if="$route.meta.showSkinButtons">
        <div>
          <p>스킨을 선택하세요</p>
          <div>
            <input
              type="radio"
              name="skin"
              value="Ewxel"
              id="Ewxel"
              v-model="selectedSkin"
            />
            <label for="Ewxel">Ewxel</label>
            <input
              type="radio"
              name="skin"
              value="Adude"
              id="Adude"
              v-model="selectedSkin"
            />
            <label for="Adude">Adude</label>
            <input
              type="radio"
              name="skin"
              value="Simple"
              id="Simple"
              v-model="selectedSkin"
            />
            <label for="Simple">Simple</label>
          </div>
        </div>
      </div>
    </div>
    <router-view :selectedSkin="selectedSkin" />
  </div>
</template>
<script>
import bugModal from "@/components/bugModal.vue";
export default {
  data() {
    return {
      selectedSkin: "Ewxel",
      showModalBug: false,
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
  updated() {
    console.log(this.showModalBug);
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
  beforeRouteUpdate: function (to, next) {
    if (to.path === "/") {
      document.getElementById("app").classList.add("noback");
    } else {
      document.getElementById("app").classList.remove("noback");
    }
    next();
  },
  components: {
    bugModal,
  },
};
</script>
