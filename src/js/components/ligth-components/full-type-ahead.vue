<template>
    <div class="type-ahead-form">
        <input class="input is-minimal mousetrap"
               :placeholder="placeholder"
               type="text"
               v-model="editedValue"
               @input="sendToParent"
               @focus="mode = 'active'"
               @blur="blur"
               @keydown.self="mode = 'active'"
               @keydown.self.down.prevent="movePointer(1)"
               @keydown.self.up.prevent="movePointer(-1)"
               @keydown.self.enter.prevent="selectPointed"
               @keydown.self.pageDown.prevent="movePointer(10)"
               @keydown.self.pageUp.prevent="movePointer(-10)"
               @keyup.esc="blur"
        >
        <div v-if="mode === 'active'"
             class="type-ahead-form__container"
        >
            <vm-type-ahead
                    ref="typeAhead"
                    :track-by="trackBy"
                    :options="filteredOptions"
                    @selected="editedValue = $event, blur(), sendToParent()"
            ></vm-type-ahead>
        </div>
    </div>
</template>

<script>
  import vmTypeAhead from './type-ahead/type-ahead.vue'

  export default {
    components: {
      vmTypeAhead,
    },
    data(){
      return {
        editedValue: '',
        mode: 'idle', // 'active'
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      trackBy: {
        type: String,
        default: 'name',
      },
      options: {
        type: Array,
        default: {},
      },
      value: {
        type: String,
        default: '',
      },
    },
    watch: {
      value: 'refreshFromParent',
    },
    created(){
      this.refreshFromParent()
    },
    methods: {
      refreshFromParent(){
        this.editedValue = this.value
      },
      sendToParent(){
        this.$emit('input', this.editedValue)
      },
      movePointer(value){
        this.$refs.typeAhead.movePointer(value)
      },
      selectPointed(){
        this.$refs.typeAhead.selectPointed()
      },
      blur(){
        setTimeout(() => {
          this.mode = 'idle'
        })
      }
    },
    computed: {
      filteredOptions(){
        this.editedValue
        return this.options.filter((option) => {
          return option[this.trackBy].includes(this.editedValue)
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .type-ahead-form {
        position: relative;
        &__container {
            position: absolute;
            max-height: 400px;
            width: 100%;
            overflow: auto;
            z-index: 30;
            background-color: white;
        }
    }
</style>