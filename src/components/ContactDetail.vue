<template>
  <div v-if="contact" class="contact-detail">
    <h2>{{ contact.first_name + ' ' + contact.last_name }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>
    <p><strong>Address:</strong> {{ contact.address }}</p>
    <div class="buttons">
      <button class="btn edit-btn" @click="editContact">Edit</button>
      <button class="btn delete-btn" @click="deleteContact">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    contactId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      contact: state => state.currentContact
    })
  },
  methods: {
    editContact() {
      this.$router.push({ name: 'edit-contact', params: { id: this.contact.id } });
    },
    deleteContact() {
      this.$store.dispatch('deleteContact', this.contact.id);
      this.$router.push({ name: 'home' });
    }
  },
 
};
</script>

<style scoped>
.contact-detail {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
  text-align: left;
}

.contact-detail h2 {
  margin-bottom: 20px;
  color: #333;
}

.contact-detail p {
  margin: 10px 0;
  font-size: 16px;
  color: #555;
}

.contact-detail p strong {
  color: #333;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-btn {
  background-color: #007bff;
  color: #fff;
}

.edit-btn:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #dc3545;
  color: #fff;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>
