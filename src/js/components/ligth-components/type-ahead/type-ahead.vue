<template>
    <div class="type-ahead">
        <vm-type-ahead-item
                class="type-ahead__list-item"
                :track-by="trackBy"
                v-for="(option, key) in options"
                :value="option"
                :is-selected="key === pointer"
                @selected="select"
        ></vm-type-ahead-item>
    </div>
</template>

<script>
  import vmTypeAheadItem from './type-ahead-item.vue'

  export default {
    data () {
      return {
        pointer: 0
      }
    },
    components: {
      vmTypeAheadItem,
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
        let end = this.options.length - 1

        if (typeof value === 'string') {
          if (!['home', 'end'].includes(value)) {
            throw 'Incorrect syntax.'
          }
          if (value === 'home') {
            this.pointer = start
          }
          if (value === 'end') {
            this.pointer = end
          }
        }

        let futureValue = this.pointer + value
        futureValue = futureValue < start ? start : futureValue
        futureValue = futureValue > end ? end : futureValue

        this.pointer = futureValue
      },
      selectPointed(){
        let value = this.options[this.pointer][this.trackBy]

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
    .type-ahead {
        &__list-item {
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
