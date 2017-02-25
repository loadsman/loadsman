<template>
    <div class="rule" @click="$emit('click')">
        <div class="request-method"
             :class="'request-method_' + precept.method.toLowerCase()">
            {{precept.method}}
        </div>
        <div class="rule__text-block ">
            <span class="rule__text">{{precept.url}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    components: {
    },
    computed: {
      displayedName (){
        return this.precept.name ? this.precept.name : this.precept.path
      },
      currentRequest(){

      },
    },
    props: ['precept'],
    methods: {
      set(){
      },
      setAndRun(){
      }
    },
  }
</script>

<style scoped>
    .request.columns {
        margin: 0;
        border-top: 1px solid rgba(0, 0, 0, .025);
    }
    .request .button {
        border: none;
        padding: 3px 6px;
        border-radius: 0;
    }
</style>