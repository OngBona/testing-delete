<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Company Name</th>
          <th class="text-left">Owner Name</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Address</th>
          <th class="text-left">Status</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.company }}</td>
          <td class="text-left">{{ item.ownerName }}</td>
          <td class="text-left">{{ item.phone }}</td>
          <td class="text-left">{{ item.address }}</td>
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
export default {
  props: {
    items: {
      type: Array,
      default: null,
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