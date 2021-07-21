<template>
  <Modal @submit="onSubmit" title="Add New Unauthorized Record">
    <q-form>
      <div class="row">
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input
            type="number"
            label="Block Code"
            v-model.number="data.blockCode"
          />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Constituency Name" v-model="data.constituencyName" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Moza" v-model="data.moza" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Dehya" v-model="data.dehya" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="City" v-model="data.city" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Patwar Halka" v-model="data.patwarHalka" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Tapaydar" v-model="data.tapaydar" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Tehseel" v-model="data.tehseel" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Talka" v-model="data.talka" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="District" v-model="data.district" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="UnionCouncil" v-model="data.unionCouncil" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="BookNo" v-model="data.bookNo" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Constituency" v-model="data.constituency" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Gender" v-model="data.gender" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input
            type="number"
            label="Vote S No"
            v-model.number="data.voteSNo"
          />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input
            type="number"
            label="Family No"
            v-model.number="data.familyNo"
          />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Name" v-model="data.name" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Marital Status" v-model="data.maritalStatus" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input
            label="Father | Husband Name"
            v-model="data.fatherHusbandName"
          />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input type="number" label="Nic" v-model.number="data.nic" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input type="number" label="Age" v-model.number="data.age" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="House No" v-model="data.houseNo" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Street" v-model="data.street" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Phase" v-model="data.phase" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Sector" v-model="data.sector" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Lane" v-model="data.lane" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Boulevard Avenue" v-model="data.boulevardAvenue" />
        </div>
        <div class="col col-xs-12 col-sm-4 q-pa-sm">
          <q-input label="Other Area" v-model="data.otherArea" />
        </div>
        <div class="col col-xs-12 col-sm-8 q-pa-sm">
          <q-input label="Address" v-model="data.address" />
        </div>
      </div>
    </q-form>
  </Modal>
</template>

<script>
import { ref, defineComponent } from "vue";
import Modal from "@/components/general/Modal";
import UnAuthorizedService from "./unAuthorizedService";
// import UnauthorizedModel from "./UnAuthorizedModel";
export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    const data = ref({
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
    });

    const onSubmit = async () => {
      try {
        const req = await UnAuthorizedService.addNewUnauthorizedData(
          data.value
        );
        return req.data;
      } catch (error) {
        console.log(error);
      }
    };

    return {
      data,
      onSubmit,
    };
  },
});
</script>

<style></style>
