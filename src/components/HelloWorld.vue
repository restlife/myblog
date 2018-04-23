<template>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1'
    }
  },
  mounted(){
    var radm = parseInt(Math.random()*1000);
    var _this = this;
    axios.get('/kkk?'+radm)
      .then(function(response){
        _this.msg=response.data.msg;
      })
      .catch(function(err){
        console.log(err);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul li{
    font-size: 20px;
}
</style>
