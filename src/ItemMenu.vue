<template lang="html">
    <ul class="dropdown-content" :id="'menu'+dataId" :style="active ? activeStyle : '' " @mouseleave="onMouseLeave">
      <li>
        <p v-for="color in colors.slice(1)"
              :class="['color-sm', color]" :id="color"
              @click="onColorChange"></p>
      </li>
      <li class="h-txt sun-txt star-btn"
          @click="onStarChange">{{ starred ? 'unstar' : 'star'}}</li>
      <li class="h-txt rose-txt remove-btn"
          @click="onRemove">remove</li>
    </ul>
</template>

<script>
export default {
  props: ['active', 'colors', 'data-id', 'starred'],
  template: ``,
  data: function(){
    return {
      activeStyle: {
        width: '26.25px',
        position: 'absolute',
        top: '0',
        right: '3em',
        opacity: 1,
        display: 'block'
      }
    }
  },
  methods: {
    emitColor: function(e){
      this.$emit('new-color', e.target.id)
    },
    onColorChange: function(e){
      this.emitColor(e)
      this.$emit('color-change')
    },
    onStarChange: function(){
      this.$emit('star-change')
    },
    onMouseLeave: function(){
      this.$emit('mouseleave')
    },
    onRemove: function(){
      this.$emit('remove')
    }
  }
}
</script>
