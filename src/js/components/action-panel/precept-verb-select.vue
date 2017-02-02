<template>
    <select>
        <option v-for="option in options"
                :value="option"
                v-text="option"
        ></option>
    </select>
</template>

<script>
  export default {
    data (){
      return {
        options: [
          'POST',
          'GET',
          'DELETE',
          'PUT',
          'PATCH',
          'OPTIONS',
        ]
      }
    },
  }
</script>

<style lang="sass" rel="stylesheet/sass">

</style>