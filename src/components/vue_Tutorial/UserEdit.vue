<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field 
      label="이름" 
      v-model="user.name"
    ></v-text-field>
    <v-text-field 
      label="주소" 
      v-model="user.address"
    ></v-text-field>
    <v-text-field 
      label="번호" 
      v-model="user.phone"
    ></v-text-field>
    <v-radio-group 
      v-model="user.dog">
      <v-radio 
        label="O" 
        :value="true"
      ></v-radio>
      <v-radio 
        label="X" 
        :value="false"
      ></v-radio>
    </v-radio-group>
    <v-btn 
      @click="changeUser"
    >수정</v-btn>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["name", "address", "phone", "dog"],
  methods: {
    changeUser() {
      this.$emit("changeUserfromChild", this.user);
      eventBus.userEdit()
    },
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    //props가 넘어왔을때 (component가 생성될때)
    //data()값     =  prop로 넘어온값
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.phone = this.phone;
    this.user.dog = this.dog;


    
  },
};
</script>