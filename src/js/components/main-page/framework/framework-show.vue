<template>
    <table class="table">
        <tr>
            <th colspan="2">
                Framework
                <div class="button is-small is-pulled-right"
                   @click="$emit('reload')"
                >
                    <div class="icon is-small">
                        <i class="fa fa-refresh"></i>
                    </div>
                </div>
            </th>
        </tr>
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