<template>
  <div class="contactform">
    <h2 v-if="contact.id">Edit Contact</h2>
    <h2 v-else>Add Contact</h2>
    <form @submit.prevent="saveContact">
      <div class="form-group">
      <label for="first_name">First name:</label>
      <input type="text" v-model="contact.first_name" id="first_name"  placeholder="First Name" required>
    </div>
    <div class="form-group">
      <label for="last_name">Last Name:</label>
      <input type="text" v-model="contact.last_name" id="last_name" placeholder="Last Name" required>
    </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="contact.email" id="email" placeholder="Email" required>
    </div>
     
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" v-model="contact.phone" id="phone" placeholder="Phone" required>
    </div>
      
      <div class="form-group">
        <label for="adddress">Address:</label>
        <input type="text" v-model="contact.address" id="address" placeholder="Address" required >
    </div>
      
     
    <button type="submit" class="btn-submit">Save Contact</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AddContact',
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      }
    };
  },
  computed: {
    ...mapState({
      contacts: state => state.contacts
    })
  },
  methods: {
    async loadContact() {
      if (this.$route.params.id) {
        const contact = this.contacts.find(contact => contact.id === this.$route.params.id);
        if (contact) {
          this.contact = { ...contact };
        } else {
          await this.$store.dispatch('fetchContactById', this.$route.params.id);
          this.contact = { ...this.$store.state.currentContact };
        }
      }
    },
    saveContact() {
      this.$store.dispatch('saveContact', this.contact).then(() => {
        this.$router.push({ name: 'home' });
      });
    }
  },
  created() {
    this.loadContact();
  }
};
</script>

  
  <style scoped>
 .contactform {
  padding: 20px;
  margin: 0 auto;
  max-width: 500px;
}

.contactform h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #0056b3;
}
  </style>
  