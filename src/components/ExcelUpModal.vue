<template>
  <div class="example-modal-window">
    <v-btn @click="openModal">xlsx 업로드 </v-btn>
    <Modal @close="closeModal" v-if="modal">
      <p>엑셀 업로드</p>
      <v-btn
        small
        color="red"
        v-if="xlsxData.length > 0"
        @click="excelDataList"
      >
        저장
      </v-btn>
      <v-btn>
        <input
          type="file"
          @change="readFile"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        />
      </v-btn>
      <v-card v-for="(item, index) in xlsxData" :key="index">
        <p>{{ index }} . {{ item[1] }}</p>
      </v-card>
      <template slot="footer"> </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import XLSX from "xlsx";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      modal: false,
      xlsxData: [],
      passXlsxData: [],
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    excelDataList() {
      this.xlsxData.forEach((element) => {
        const equipName = element[1];
        this.passXlsxData.push({ memo: equipName, status: "create" });
      });
      this.$emit("equipName", this.passXlsxData);
      this.modal = false;
    },
    readFile(event) {
      const file = event.target.files[0];
      const fileName = file.name;

      const reader = new FileReader();
      let tmpResult = {};
      var excelData;

      reader.onload = (e) => {
        let data = e.target.result;
        data = new Uint8Array(data); // get excel file
        let excelFile = XLSX.read(data, { type: "array" }); // get prased object

        excelFile.SheetNames.forEach(function(sheetName) {
          const roa = XLSX.utils.sheet_to_json(excelFile.Sheets[sheetName], {
            header: 1,
          });
          if (roa.length) tmpResult[sheetName] = roa;
        });
        excelData = tmpResult.Sheet1;
        this.result = tmpResult.Sheet1;
        this.xlsxData = this.result;
      };

      reader.readAsArrayBuffer(file);
    },
  },
};
</script>
