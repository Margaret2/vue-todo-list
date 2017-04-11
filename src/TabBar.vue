<template lang="html">
  <div class="row">
              <div class="col s12">
                <ul class="tabs">
                  <li class="col s1"></li>
                  <li v-for="(color, index) in colors"
                      :class="[tabClass,
                              index === activeTab ? 'active' : '']"
                      :id="index"
                      @click="activate(index)">
                    <p :class="'color ' + color"></p>
                  </li>
                  <li :class="[tabClass, 'star',
                              5 === activeTab ? 'active' : '']"
                      :id="5"
                      @click="activate(5)">
                    <p id="star">
                      <span class="lg-i material-icons sun">grade</span>
                    </p>
                  </li>
                  <li class="col s1"></li>
                 </ul>
                </div>
              </div>
</template>

<script>
export default {
  props: ['colors'],
  data: function(){
    return {
      activeTab: 0,
      tabClass: 'tab col s1 ',
    }
  },
  methods: {
    activate: function(i){
      this.activeTab = i;
      let filter = i === 0 ? 'all'
                  : i === 5 ? 'starred'
                  : this.colors[i]
      this.$emit('filter', filter)
    }
  }
}
</script>
