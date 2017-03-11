<template>
    <div @click.prevent="select"
         class="type-ahead__list-item"
         :class="{selected: isSelected}"
    >
        {{ text }}
    </div>
</template>

<script>
  export default {
    props: {
      isSelected: {
        type: Boolean,
        default: false,
      },
      value: {
        type: [Object, String]
      },
      trackBy: {
        type: String,
        default: 'name',
      },
    },
    watch: {
      isSelected(){
        this.$el.scrollIntoView(false)
      }
    },
    methods: {
      select(){
        console.log(this.text)
        this.$emit('selected', this.text)
      }
    },
    computed: {
      text(){
        let option = this.option
        if (typeof option === 'string') {
          return option
        }
        return option[this.trackBy]
      },
      option () {
        return this.value
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>