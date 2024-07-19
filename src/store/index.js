// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    contacts: [],
    currentContact: null
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
    SET_CURRENT_CONTACT(state, contact) {
      state.currentContact = contact;
    },
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
    },
    DELETE_CONTACT(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    UPDATE_CONTACT(state, updatedContact) {
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        state.contacts.splice(index, 1, updatedContact);
      }
    }
  },
  actions: {
    async fetchContacts({ commit }) {
      try {
        const response = await axios.get('contacts/');
        commit('SET_CONTACTS', response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    },
    async fetchContactById({ commit }, id) {
      try {
        const response = await axios.get(`contacts/${id}/`);
        commit('SET_CURRENT_CONTACT', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    },
    async saveContact({ commit }, contact) {
      try {
        if (contact.id) {
          const response = await axios.put(`contacts/${contact.id}/`, contact);
          commit('UPDATE_CONTACT', response.data);
        } else {
          const response = await axios.post('contacts/', contact);
          commit('ADD_CONTACT', response.data);
        }
      } catch (error) {
        console.error('Error saving contact:', error);
      }
    },
    async deleteContact({ commit }, id) {
      try {
        await axios.delete(`contacts/${id}/`);
        commit('DELETE_CONTACT', id);
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  },
  modules: {}
});
