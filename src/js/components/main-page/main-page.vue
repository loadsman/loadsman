<template>
    <div class="main-page">
        <div>
            <div class="card">
                <p class="card-header-title">MAIN PAGE</p>
            </div>
            <div class="card">
                <div class="load-spinner__container">
                    <div class="load-spinner load-spinner_bottom-right"
                         transition="fade-in"
                    ></div>
                </div>
                <div class="loader is-large"></div>
                Main stuff
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      reload (){

      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .main-page {
        padding: 10px;
    }
</style>