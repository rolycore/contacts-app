<template>
  <div>
    <ContactDetail :contact-id="$route.params.id" />
  </div>
</template>

<script>
import ContactDetail from '../components/ContactDetail.vue';

export default {
  components: {
    ContactDetail
  }
};
</script>
