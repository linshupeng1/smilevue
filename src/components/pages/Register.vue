<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    ></van-nav-bar>
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        @click-icon="username=''"
      ></van-field>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      ></van-field>
      <div class="register-button">
        <van-button type="primary" size="large" @click="axiosRegisterUser">马上注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import url from '@/serviceAPI.config.js'
  export default{
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      axiosRegisterUser(){
        axios({
          url: url.registerUser,
          methods: 'post',
          data: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>
<style scoped>
  .register-panel {
    width: 96%;
    border-radius: 5px;
    margin: 20px auto;
    padding-bottom: 50px;
  }

  .register-button {
    padding-top: 10px;
  }
</style>
