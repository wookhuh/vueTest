<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{name}}</p>
    <p>생성일시: {{createAt}}</p>
    <v-btn color="info" @click="changeName()">이름변경</v-btn>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :propsNameOfChild="name"
          :name="name"
          :address="address"
          :phone="phone"
          :dog="dog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :dog="dog"
          @changeUserfromChild="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "Vue.Js props",
      address: "주소 props",
      phone: "번호 props",
      dog: true,
      createAt: ''
    };
  },
  methods: {
    changeName() {
      this.name = "aaaaaaaaaaaaaaaaa";
    },
    parents(userInfo) {
      this.name = userInfo.name;
      this.address = userInfo.address;
      this.phone = userInfo.phone;
      this.dog = userInfo.dog;
    },
    getDateAdnTime(date){
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let fulldate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} `
      return `${fulldate} ${hour}:${minutes}`
    }
  },
  created() {
    this.createAt = new Date()
  },
};
</script>