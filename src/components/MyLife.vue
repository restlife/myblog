<template>
  <div>
    hello restlife
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data(){

    },
    computed: {
    },
    mounted(){
      console.log(this.$route.params+"**"+this.$route.query)
    }
  }
</script>

<style>

</style>

