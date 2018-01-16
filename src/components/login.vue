<template>
  <div align="center">
    <h1 style="margin-top: 170px">Welcome</h1>
    <form @submit.prevent="signIn()">
      <p><input v-model="user.email" type="email" class="input" placeholder="@example.com"></p>
      <p><input v-model="user.password" type="password" class="input" placeholder="************"></p>
      <div style="margin-top: 25px">
        <button class="btn btn-default" v-on:click="logIn()" style="color: crimson"><i class="fa fa-google"></i> Sign in with Google</button>
        <router-link to="/register" tag="button" class="btn btn-default">Create acount</router-link>
        <button type="submit" class="btn btn-primary" v-on:click="" autofocus>Log In</button>
      </div>
    </form>
  </div>
</template>

<script>

    export default {
        name: 'login',
        data() {
            return {
                user: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            logIn() {
                var provider = new firebase.auth.GoogleAuthProvider();

                provider.setCustomParameters({
                    'login_hint': 'user@example.com'
                });

                provider.addScope('https://www.googleapis.com/auth/plus.login');
                firebase.auth().signInWithPopup(provider).then((result) => {
                    this.user.token = result.credential.accessToken;
                    this.user.username = result.user;
                }).catch((error) => {
                    alert(error.message);
                });
                console.log(provider);

            },
            signIn() {
                firebase.auth().signInWithEmailAndPassword(
                  'matti1020009@gmail.com',
                  'Hogar123'
                ).then((response) => {
                    alert('exito');
                }).catch((error) => {
                    alert(error.message);
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