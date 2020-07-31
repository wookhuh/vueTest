<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <div>
    <v-card
      class="pa-3 mb-3"
      :class="{ done: list.status === 'done' }"
      v-for="(list, index) in todoList"
      :key="index"
      v-if="list.status !== 'remove'"
    >
      <!--todoList.slice().reverse() -->
      <p>{{ list.memo }}</p>
      <div>
        <v-btn
          fab
          small
          color="green"
          v-if="list.status === 'create'"
          @click="$emit('statusCntrl', index, 'done')"
        >완료</v-btn>
        <v-btn fab small color="blue" v-else @click="$emit('statusCntrl', index, 'create')">취소</v-btn>
        <v-btn fab small color="red" @click="$emit('statusCntrl', index, 'remove')">제거</v-btn>
        <v-btn
          @click="listEditTodo(list.memo, index)"
          v-if="list.status === 'create'"
          fab
          small
          color="yellow"
        >
          <i class="fas fa-edit"></i>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "List",
  data() {
    return {};
  },
  props: ["todoList"],
  methods: {
    listEditTodo(memo, index) {
      eventBus.listEdit(memo, index);
    },
  },
};
</script>

<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.5);
}
.done p {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
