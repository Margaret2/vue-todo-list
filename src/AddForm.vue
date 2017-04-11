<template lang="html">
  <p v-if="!showForm" class=" center new-todo limit">
    <span class="material-icons" id="add"
                @click="toggleForm">add_circle_outline</span>
  </p>
  <p v-else class="center new-todo limit">
    <input type="text"  id="new-input" v-model="inputValue" @keyup.esc="toggleForm" @keyup.enter="handleAdd">
    <button type="submit" class="btn"
                    @click="handleAdd">Add</button>
  </p>
</template>

<script>
export default {
  data: function(){
    return {
      showForm: false,
      inputValue: ''
    }
  },
  methods: {
    toggleForm: function(){
      this.showForm = !this.showForm
    },
    handleAdd: function(){
      this.$emit('add-item', this.inputValue)
      this.inputValue = ''
      this.toggleForm()
    }
  }
}
</script>

<style lang="css">
</style>
