<template>
  <div class="q-ma-md">
    <q-card>
      <q-card-section class="text-center text-h5">
        Customer Form
      </q-card-section>
      <q-card-section>
        <div class="fit row justify-evenly">
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.name" label="Name" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <fieldset>
              <label> Gender</label>
              <q-radio v-model="form.gender" val="male" label="Male" />
              <q-radio v-model="form.gender" val="female" label="Femal" />
            </fieldset>
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input
              outlined
              v-model="form.dob"
              label="Date Of Birth"
              type="date"
            />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.phone" label="Phone" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined autogrow v-model="form.address" label="Address" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <fieldset>
              <label>Status</label>
              <q-radio v-model="form.status" val="active" label="Active" />
              <q-radio v-model="form.status" val="inactive" label="Inactive" />
            </fieldset>
          </div>

          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-btn
              color="primary"
              :label="updateDoc ? `Update` : `Submit`"
              @click="handleSubmit"
            />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm"></div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    updateDoc: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        name: null,
        gender: "male",
        dob: null,
        phone: null,
        address: null,
        status: "active",
      },
    };
  },
  mounted() {
    if (this.updateDoc) {
      this.form = this.updateDoc;
    }
  },
  methods: {
    handleSubmit() {
      this.form.dob = moment(this.form.dob, "YYYY-MM-DD").toDate();
      let method = "";
      if (this.updateDoc) {
        // code update
        method = "customer.update";
      } else {
        // code insert
        method = "customer.insert";
      }
      Meteor.call(method, this.form, (err, result) => {
        if (result) {
          this.$emit("close");
        }
      });
    },
  },
};
</script>

<style>
</style>