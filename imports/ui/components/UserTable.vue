<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Role</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ user.username }}</td>
          <td class="text-left">{{ user.email }}</td>
          <td class="text-left">{{ user.phone }}</td>
          <td class="text-left">{{ user.role }}</td>
          <td class="text-left">
            <q-btn
              icon="delete"
              color="red"
              dense
              @click="handleDelete(user._id)"
            />
            <q-btn icon="edit" color="info" dense @click="handleEdit(user)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: null,
    },
  },
  methods: {
    handleDelete(id) {
      console.log("delete", id);
      this.$emit("delete", id);
    },
    handleEdit(user) {
      console.log("edit", user);
      this.$emit("edit", user);
    },
  },
};
</script>

<style>
</style>