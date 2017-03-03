<template>
    <div class="rule" @click="$emit('selected')">
        <div class="request-method"
             :class="'request-method_' + method.toLowerCase()">
            {{method}}
        </div>
        <div class="rule__text-block ">
            <span class="rule__text">{{rule.uri}}</span>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    components: {
    },
    computed: {
      method(){
        let method = this.rule.methods[0]
        return method ? method : 'GET'
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
            white-space: nowrap;
            text-overflow: ellipsis;
            z-index: 10;
            &:not(:hover) {
                width: calc(100% - 60px);
                overflow: hidden;
            }
        }
    }


</style>