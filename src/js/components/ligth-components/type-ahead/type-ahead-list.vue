<template>
    <div class="type-ahead-list">
        <div class="type-ahead-list__item"
             v-for="(option, key) in options"
             :class="{selected: key === pointer}"
             @mousedown="select(option)"
        >
            <slot :option="option"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        pointer: 0
      }
    },
    props: {
      trackBy: {
        type: String,
        default: 'name',
      },
      options: {
        default: () => []
      },
    },
    watch: {
      options (){
        this.pointer = 0
      }
    },
    computed: {
      selectedOption(){
        return this.options[this.pointer]
      },
    },
    methods: {
      movePointer(value){
        let start = 0
        let end = this.options.length ? this.options.length - 1 : 0
        let oldPointer = this.pointer

        let newPointer = oldPointer + value
        newPointer = newPointer < start ? start : newPointer
        newPointer = newPointer > end ? end : newPointer

        this.pointer = newPointer

        this.scrollPointerIntoView(oldPointer > newPointer)
      },
      scrollPointerIntoView(start: Boolean = false){
        this.$el.children[this.pointer].scrollIntoView(start)
      },
      selectPointed(){
        let value = this.options[this.pointer]

        if (value) {
          this.select(value)
        }
      },
      select(value){
        this.$emit('selected', value)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .type-ahead-list {
        &__item {
            height: 26px;
            padding: 2px 5px;
            &:hover {
                background-color: hsl(0, 0%, 97%);
            }
            &.selected {
                background-color: hsl(0, 0%, 93%);
            }
            cursor: pointer;
        }
    }
</style>
