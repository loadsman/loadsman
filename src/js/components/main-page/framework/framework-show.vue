<template>
    <div>
        <table class="table">
            <tr>
                <td>Name</td>
                <td>{{framework.name}}</td>
            </tr>
            <tr>
                <td>Version</td>
                <td>{{framework.version}}</td>
            </tr>
            <tr>
                <td>Features</td>
                <td>{{framework.features.join(', ')}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  import Framework from '../../../classes/Entities/Framework.js'

  export default {
    props: {
      framework: {
        type: Framework,
        required: true,
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>