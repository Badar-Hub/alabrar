<template>
  <Modal title="Add New Unauthorized Record">
    <q-form>
      <q-input label="Block Code" v-model="data.blockCode" />
    </q-form>
  </Modal>
</template>

<script>
import Modal from "@/components/general/Modal";
import { ref, defineComponent } from "vue";
import UnauthorizedModel from "./UnAuthorizedModel";
export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    const data = ref<UnauthorizedModel>{
        blockCode: 0,
        constituencyName: "",
        moza: "",
        dehya: "",
        city: "",
        patwarHalka: "",
        tapaydar: "",
        tehseel: "",
        talka: "",
        district: "",
        unionCouncil: "",
        bookNo: "",
        constituency: "",
        gender: "",
        voteSNo: 0,
        familyNo: 0,
        name: "",
        maritalStatus: "",
        fatherHusbandName: "",
        nic: 0,
        age: 0,
        houseNo: "",
        street: "",
        phase: "",
        sector: "",
        lane: "",
        boulevardAvenue: "",
        otherArea: "",
        address: "",
      };

    return {
      data,
    };
  },
});
</script>

<style></style>
