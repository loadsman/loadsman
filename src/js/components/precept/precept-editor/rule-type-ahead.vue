<template>
    <div class="type-ahead-form">
        <input class="input is-minimal mousetrap"
               :placeholder="placeholder"
               type="text"
               v-model="editedValue"
               @input="sendToParent"
               @focus="mode = 'active'"
               @keydown.self="mode = 'active'"

               @keydown.self.prevent.enter="selectPointed()"
               @keydown.self.prevent.down="movePointer(1)"
               @keydown.self.prevent.up="movePointer(-1)"
               @keydown.self.prevent.pageDown="movePointer(10)"
               @keydown.self.prevent.pageUp="movePointer(-10)"
               @keydown.self.prevent.ctrl.end="movePointer(999999)"
               @keydown.self.prevent.ctrl.home="movePointer(-999999)"
               @keyup.self.esc="blur"
               @keyup.self.tab="blur"
               @blur.self="blur"
        >

        <div v-if="mode === 'active'"
             class="type-ahead-form__container"
        >
            <vm-type-ahead
                    ref="typeAhead"
                    :options="filteredOptions"
                    @selected="editedValue = $event.uri, blur(), sendToParent($event.uri)"
            >
                <template scope="props">
                    {{ props.option.uri }}
                </template>
            </vm-type-ahead>
        </div>
    </div>
</template>

<script>
  import vmTypeAhead from '../../ligth-components/type-ahead/type-ahead-list.vue'

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
        this.mode = 'idle'
      },
    },
    computed: {
      filteredOptions(){
        this.editedValue
        return this.options.filter((option) => {
          return option.uri.includes(this.editedValue)
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