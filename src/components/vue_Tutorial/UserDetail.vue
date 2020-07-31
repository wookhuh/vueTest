<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ propsNameOfChild }}</p>
    <p>{{ computedTest }}</p>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <p>{{ phone }}</p>
    <p>{{ hasDog }}</p>
    <p>{{ editedDate }}</p>
    <v-btn @click="switchName()">이름변경</v-btn>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["propsNameOfChild", "name", "address", "phone", "dog"],
  computed: {
    computedTest() {
      return this.propsNameOfChild + "aaaaaaaaaaa";
    },
    hasDog() {
      return this.dog === true ? "있음" : "없음";
    },
  },
  methods: {
    switchName() {
      return (this.propsNameOfChild = "bbbbbbbb"); //X(자식컴포넌트만 변경 부모에따라변경가능성있음)
    },
  },
  data() {
    return {
      age: 30,
      editedDate: ''
    };
  },
  created() {
    eventBus.$on('userEditEventBus', (date) => {
      this.editedDate = date
    })
  },
};
</script>
