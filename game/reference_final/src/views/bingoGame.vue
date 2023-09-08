<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>단어</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, index) in getWords" :key="index">
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
  mounted() {
    console.log(this.getWords);
    this.$store.dispatch("fetchWords");
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
