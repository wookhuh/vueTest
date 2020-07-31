<template>
  <div>
    <v-textarea outlined label="ListAdd" value v-model="memo"></v-textarea>
    <v-btn 
    @click="listAdd"
    v-if="mode ==='add'"
    >추가</v-btn>
    <v-btn 
    v-else-if="mode === 'edit'"
    @click="listEdit"
    >수정</v-btn>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      memo: null,
      index: "",
      mode: 'add'
    };
  },
  created() {
    eventBus.$on("listEditEventBus", (memo, index) => {
      this.memo = memo;
      this.index = index;
      this.mode = 'edit'
    });
  },
  components: {},
  props: ["modifyList"],
  methods: {
    listAdd() {
      if (this.memo === "" || this.memo === null) {
        alert("입력 ㄱㄱ");
      } else {
        this.$emit("listAdd", this.memo);
        this.memo = "";
      }
    },
    listEdit() {
      if (this.memo === "" || this.memo === null) {
        alert("입력 ㄱㄱ");
      } else {
        this.$emit("listEdit", this.memo, this.index);
        this.memo = "";
        this.mode = 'add'
      }
    },
  },
};
</script>
<style lang=""></style>
