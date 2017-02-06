<template>
    <div class="rule" @click="$emit('click')">
        <vm-method-button
                class="is-white"
                v-text="route.methods[0]"
        ></vm-method-button>
        <div class="rule__text-block ">
            <a class="rule__text"
               :class="{'has-error': hasError}"
               v-text="route.path"
            ></a>
        </div>
    </div>
</template>

<script>
  import vmMethodButton from '../ligth-components/method-button.vue'
  import _ from 'lodash'

  export default {
    components: {
      vmMethodButton
    },
    computed: {
      hasError (){
        return this.route.errors.length !== 0
      }
    },
    props: ['route'],
  }
</script>

<style lang="sass" rel="stylesheet/sass">
    .rule
        cursor: pointer
        .rule__text
            background-color: white
        height: 28px
        padding-top: 2px
        .rule__text-block
            display: inline-block
            width: 310px
            white-space: nowrap
            text-overflow: ellipsis
        &:not(:hover)
            .rule__text-block
                overflow: hidden
</style>