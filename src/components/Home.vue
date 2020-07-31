<template>
  <v-container>
    <v-flex xs12 text-xs-center>
      <h1>TODO LIST</h1>
      <p>전체 할일 : {{todoList.length}} / 완료된 할일 : {{countDone}}/ 남은할일 : {{todoList.length - countDone}}</p>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs6 pa-2>
        <List :todoList="todoList" @statusCntrl="statusCntrl"></List>
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd :modifyList="modifyList" @listAdd="ListAddHome" @listEdit="listEditHome"></ListAdd>
        <ExcelUpModal @equipName="excelDataListHome"></ExcelUpModal>
        <div>
          <br />
          <input v-model="msg" style="width: 25%" />
          <br />
          <input type="checkbox" v-model="open" /> Check me to open a portal!
        </div>
        <WindowPortal v-model="open">
          <HelloWorld :msg="msg" />
        </WindowPortal>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import List from "@/components/List";
import ListAdd from "@/components/ListAdd";
import ExcelUpModal from "@/components/ExcelUpModal";
import WindowPortal from "@/components/WindowPortal";

export default {
  name: "Home",
  components: {
    List,
    ListAdd,
    ExcelUpModal,
    WindowPortal,
  },
  data() {
    return {
      todoList: [],
      modifyList: [],
      msg: "Hello from another window!",
      open: false,
    };
  },
  computed: {
    countDone() {
      let doneCnt = 0;
      this.todoList.forEach((element) => {
        if (element.status === "done") {
          doneCnt++;
        }
      });
      return doneCnt;
    },
  },
  methods: {
    ListAddHome(memoParam) {
      this.todoList.push({ memo: memoParam, status: "create" });
    },
    statusCntrl(index, status) {
      console.log(index, status);
      this.todoList[index].status = status;
      if (status === "modify") {
        console.log("수정");
        this.modifyList = [];
        this.modifyList.push({
          memo: this.todoList[index].memo,
          status: status,
          index: index,
        });
        // this.$emit('todoModify', this.todoList[index])
      }
    },
    excelDataListHome(param) {
      param.splice(param.length, 1);
      param.forEach((element) => {
        this.todoList.push(element);
      });
    },
    listEditHome(memo, index) {
      this.todoList[index].memo = memo;
    },
  },
};
</script>
