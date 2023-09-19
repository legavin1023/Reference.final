<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>단어</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, index) in getWords.data" :key="index">
          <td>{{ word }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  async mounted() {
    const validationValue = Math.random() < 0.5 ? "fruit" : "num";
    await this.$store.dispatch("fetchWords", { validation: validationValue }); // 객체 형태로 validation 전달
  },
  methods: {},
  computed: {
    ...mapGetters(["getWords"]),
  },
};
</script>

<style>
/* 드래그를 사용할 수 없는 행에 대한 스타일 */
.no-drag {
  pointer-events: none;
  background-color: #503737;
}
</style>
