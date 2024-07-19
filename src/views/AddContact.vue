<template>
    <div>
      <ContactForm @saveContact="handleSaveContact" />
    </div>
  </template>
  
  <script>
  import ContactForm from '@/components/ContactForm.vue';
  import { mapActions } from 'vuex';
  
  export default {
    components: {
      ContactForm
    },
    methods: {
      ...mapActions(['saveContact']),
      handleSaveContact(contact) {
        this.saveContact(contact);
      }
    }
  };
  </script>
  