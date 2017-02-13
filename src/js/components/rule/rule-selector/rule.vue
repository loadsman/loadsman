<template>
    <div class="rule" @click="$emit('selected')">
        <div class="rule__method"
             :class="'rule_method_' + method.toLowerCase()">
            {{method}}
        </div>
        <div class="rule__text-block ">
            <span class="rule__text"
                  :class="{'has-error': hasError}"
            >{{rule.path}}</span>
        </div>
    </div>
</template>

<script>
  import vmMethodButton from '../../ligth-components/method-button.vue'
  import _ from 'lodash'

  export default {
    components: {
      vmMethodButton
    },
    computed: {
      hasError (){
        return this.rule.errors.length !== 0
      },
      method(){
        return this.rule.methods[0]
      }
    },
    props: ['rule'],
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    $lineHeight: 28px;

    .rule {
        display: flex;
        cursor: pointer;
        height: $lineHeight;
        &:nth-child(even) {
            background-color: hsl(0, 0%, 97%);
        }
        &:hover {
            background-color: hsl(0, 0%, 93%);
        }
        .rule__method {
            flex: 1 0;
            text-align: center;
            width: 60px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            background-color: gray;
            &.rule_method_get {
                background-color: hsl(110, 50%, 90%);
            }
            &.rule_method_post {
                background-color: hsl(200, 50%, 90%);
            }
            &.rule_method_delete {
                background-color: hsl(10, 50%, 90%);
            }
        }
        .rule__text {
            flex: 1 1;
            background-color: inherit;
        }
        .rule__text-block {
            background-color: inherit;
            padding: 0 5px;
            line-height: $lineHeight;
            display: inline-block;
            align-items: center;
            width: calc(100% - 60px);
            white-space: nowrap;
            text-overflow: ellipsis;
            &:not(:hover) {
                overflow: hidden;
            }
        }
    }


</style>