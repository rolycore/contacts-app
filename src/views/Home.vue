<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <ContactList />
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
      ContactList
    }
  };
  </script>
  
  