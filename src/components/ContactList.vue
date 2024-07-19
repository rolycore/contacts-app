<template>
  <div class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <span>{{ contact.first_name }} {{ contact.last_name }}</span>
        <div class="buttons">
          <button class="btn view-btn" @click="readContact(contact.id)">Ver Detalle</button>
          <button class="btn edit-btn" @click="editContact(contact.id)">Editar</button>
          <button class="btn delete-btn" @click="deleteContact(contact.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ContactList',
  computed: {
    ...mapState({
      contacts: state => state.contacts
    })
  },
  
  created() {
    this.$store.dispatch('fetchContacts').then(() => {
      console.log('Contacts in created hook:', this.contacts); // Log para verificar los datos en el componente
    });
  },
  methods: {
    readContact(id){
      this.$router.push({ name: 'contact-detail', params: { id: id } });
    },
    editContact(id) {
      this.$router.push({ name: 'edit-contact', params: { id: id } });
    },
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id).then(() => {
        console.log('Contact deleted:', id);
      });
    }
  }
};
</script>

<style scoped>
.contact-list {
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f9f9f9;
  margin-bottom: 5px;
  border-radius: 4px;
  color: black;
}
span {
  flex: 1;
}
.buttons {
  display: flex;
  gap: 10px; /* Espacio entre botones */
}
button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}
.view-btn {
  background-color: blue;
}
.edit-btn {
  background-color: green;
}
.delete-btn {
  background-color: red;
}
button:hover {
  opacity: 0.8;
}
</style>
