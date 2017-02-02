<template>
    <div>
        <form class="action-panel"
              @submit.prevent="sendPrecept"
        >
            <div class="control has-addons">
                <div class="select precept__precept-verb-select">
                    <vm-precept-verb-select
                            v-model="precept.method"
                    ></vm-precept-verb-select>
                </div>

                <input class="input is-expanded"
                       type="text"
                       placeholder="Path"
                       title="Path"
                       v-model="precept.path"
                >

                <button class="button is-success"
                        :class="{'is-loading': false}"
                        type="submit"
                        title="Send"
                >
            <span class="icon">
                <i class="fa fa-send-o"></i>
            </span>
                    <span>Send</span>
                </button>
            </div>
        </form>
    </div>
</template>

<button class="button is-primary"
        :class="{'is-loading': $activeActions['requests/store'] || $activeActions['requests/update']}"
        type="button"
        @click="save"
        title="Save"
>
    <i class="fa fa-save"></i>
</button>

<button class="button is-icon is-primary"
        :class="{'is-disabled': ! request.id}"
        type="button"
        @click="copy"
        title="Copy"
>
    <i class="fa fa-files-o"></i>
</button>

<script>
  import preceptDecorator from '../../instances/preceptDecorator.js'

  import vmPreceptVerbSelect from './precept-verb-select.vue'

  export default {
    data: () => {
      return {
        preceptDecorator,
      }
    },
    components: {
      vmPreceptVerbSelect,
    },
    methods: {
      sendPrecept(): void {

      },
      save (){
        // Saves or updates depending on whether request has id
        let action = this.request.id ? 'updateRequest' : 'saveRequest'

        this.$store.dispatch(action, this.request)
      },
      copy(){
        // Just saves request.
        this.$store.dispatch('saveRequest', this.request)
      }
    },
    computed: {
      precept (): string {
        return this.preceptDecorator.precept
      }
    },
  }
</script>

<style lang="sass" rel="stylesheet/sass">
    $borderColor: #0092a2
    $color: #c6faff

    .action-panel
        margin: 0
        width: 100%
        .button, .button:hover, .button:active
            border-color: #0092a2 !important

        .input, .input:hover
            transition: all ease .1s
            background-color: #0092a2
            border-color: $borderColor
            color: $color
            font-weight: 100
            font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif
            &::-webkit-input-placeholder
                color: darken($color, 20%)

        .input:focus
            background-color: #ffffff
            color: #69707a
            border-color: $borderColor

        .button
            overflow: hidden

    .select.precept__precept-verb-select
        &:after
            border-color: #c6faff
        &:hover
            border-color: $borderColor
        & > select
            background-color: #1fc8db
            border-color: $borderColor
            color: $color
            &:hover
                border-color: darken($borderColor, 10%)
            &:focus
                border-color: darken($borderColor, 10%)
</style>