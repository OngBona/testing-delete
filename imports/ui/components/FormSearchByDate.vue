<template>
  <div>
    <fieldset>
      <legend>Search By Date</legend>
      <div class="row justify-center items-center">
        <div class="col-md-4 col-xl-12 q-pa-sm">
          <q-input outlined v-model="form.fromDate">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="form.fromDate" mask="DD-MM-YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-xl-12 q-pa-sm">
          <q-input outlined v-model="form.toDate">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="form.toDate" mask="DD-MM-YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-md-2 col-xs-12">
          <q-btn label="Search" @click="findByDate" />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {
        fromDate: moment(new Date()).startOf("month").format("DD-MM-YYYY"),
        toDate: moment(new Date()).format("DD-MM-YYYY"),
      },
    };
  },
  methods: {
    findByDate() {
      this.$emit("searchByDate", this.form);
    },
  },
};
</script>

<style>
</style>