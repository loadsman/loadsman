<template>
    <div class="tabs is-fullwidth">
        <ul>
            <li v-for="page in pages"
                :class="{'is-active': value === page}">
                <a @click="$emit('input', page)"
                >{{ upperFirst(page) }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import _ from 'lodash'

  export default {
    props: {
      value: {},
      pages: {
        required: true,
        type: Array,
      }
    },
    methods: {
      upperFirst(value){
        return _.upperFirst(value)
      }
    },
  }
</script>

<style scoped>

</style>