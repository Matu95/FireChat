<template>
  <div align="center">
    <h1 style="margin-top: 170px">Welcome</h1>
    <p><input type="text" class="input" placeholder="Username"></p>
    <p><input type="text" class="input" placeholder="Password"></p>
    <div style="margin-top: 25px">
      <button class="btn btn-default" v-on:click="logIn()" style="color: crimson"><i class="fa fa-google" aria-hidden="true"></i>  Sign in with Google</button>
      <router-link to="/register" tag="button" class="btn btn-default">Create acount</router-link>
      <button class="btn btn-primary" v-on:click="">Log In</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {

            }
        },
        methods:{
            logIn(){
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    this.user.token = result.credential.accessToken;
                    this.user.username = result.user;
                }).catch(function(error) {
                    var errorCode     = error.code;
                    var errorMessage  = error.message;
                    var email         = error.email;
                    var credential    = error.credential;
                });
            }
        }
    }
</script>

<style>
  .input {
    width: 300px;
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 10px;
    font-size: 14px;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  h1 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 20px;
  }
</style>