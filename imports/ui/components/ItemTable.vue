<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-left">Category</th>
          <th class="text-left">Date</th>
          <th class="text-left">Description</th>
          <th class="text-left">Status</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.categoryName }}</td>
          <td class="text-left">{{ item.date | toDate }}</td>
          <td class="text-left">{{ item.description }}</td>
          <td class="text-left">{{ item.status }}</td>
          <td class="text-left">
            <q-btn
              icon="delete"
              color="red"
              dense
              @click="handleDelete(item._id)"
            />
            <q-btn icon="edit" color="info" dense @click="handleEdit(item)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  filters: {
    toDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
  },
  methods: {
    handleDelete(id) {
      console.log("delete", id);
      this.$emit("delete", id);
    },
    handleEdit(doc) {
      this.$emit("edit", doc);
    },
  },
};
</script>

<style>
</style>