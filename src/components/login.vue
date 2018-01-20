<template>
    <div align="center">
        <h1 style="margin-top: 170px">Welcome to 🔥FireChat</h1>
        <p><input v-model="user.email" type="email" class="input" placeholder="@example.com"></p>
        <p><input v-model="user.password" type="password" class="input" placeholder="************"></p>
        <div style="margin-top: 25px">
            <router-link to="/register" tag="button" class="btn btn-default">Create acount</router-link>
            <button class="btn btn-primary" v-on:click="signIn()" autofocus>Log In</button>
        </div>
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
            signIn() {
                firebase.auth().signInWithEmailAndPassword(
                    this.user.email,
                    this.user.password
                ).then((response) => {
                    this.$router.push('/home');
                }).catch((error) => {
                    notifications_error(error.message);
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