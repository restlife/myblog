<template>
  <div class="dropdown">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Restlife</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">杂记</a></li>
            <li><a href="#">图片</a></li>
            <!--<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Java
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">jmeter</a></li>
                <li><a href="#">EJB</a></li>
                <li><a href="#">Jasper Report</a></li>
                <li class="divider"></li>
                <li><a href="#">分离的链接</a></li>
                <li class="divider"></li>
                <li><a href="#">另一个分离的链接</a></li>
              </ul>
            </li>-->

          </ul>
        </div>
      </div>
    </nav>
    <input type="text" v-show="!errorTip" class="username" v-model="userName">
    <input type="password" v-show="!errorTip"  class="pwd" v-model="userPwd">
    <button v-show="!errorTip"  @click="login">登录</button>
    <button v-show="errorTip"  @click="logOut">退出</button>
    <span v-text="nickName"></span>
    <a href="/my">123123</a>
</div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default{
    data(){
      return {
        userName: 'admin',
        userPwd: '123456',
        errorTip: false
      }
    },
    computed:{
      ...mapState(['nickName'])
    },
    mounted(){
      this.checkLogin();
    },
    methods:{
      checkLogin(){
        axios.post("/users/checklogin").then((response)=>{
          var res = response.data;
          var path = this.$route.pathname;
          if(res.status=="0"){
//                      this.nickName = res.result;
            this.errorTip = true;
            this.$store.commit("updateUserInfo",res.result.userName);
            this.loginModalFlag = false;
          }
        });
      },
      login(){
        if(!this.userName || !this.userPwd){
          this.errorTip = false;
          return;
        }
        axios.post("/users/login",{
          userName:this.userName,
          userPwd:this.userPwd
        }).then((response)=>{
          let res = response.data;
          if(res.status=="0"){

            this.errorTip = true;
            this.loginModalFlag = false;
            this.$store.commit("updateUserInfo",res.result.userName);
            this.getCartCount();
          }else{
            this.errorTip = true;
          }
        });
      },
      logOut(){
          axios.post("/users/logout").then((response)=>{
              let res = response.data;
            console.log(res);
              if(res.status=="0"){
                this.errorTip = false;
                  this.$store.commit("updateUserInfo",res.result);
              }
          })
      }
    }
  }
</script>

<style>

</style>

