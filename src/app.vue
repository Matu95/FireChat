<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
    const config = {
        apiKey: "AIzaSyAEQG5nv-JzSjqWouBAO7kb1chLxgZqaTE",
        authDomain: "live-chat-ff8c6.firebaseapp.com",
        databaseURL: "https://live-chat-ff8c6.firebaseio.com",
        projectId: "live-chat-ff8c6",
        storageBucket: "live-chat-ff8c6.appspot.com",
        messagingSenderId: "77388527191"
    };
    firebase.initializeApp(config);

    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>