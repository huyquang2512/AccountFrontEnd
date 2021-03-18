<template>
  <edit-account :title="title"></edit-account>
</template>

<script>
import EditAccount from "../../components/Account/CreateEdit.vue";
export default {
  data() {
    return {
      title: "Edit Account"
    };
  },
  components: { EditAccount },
};
</script>