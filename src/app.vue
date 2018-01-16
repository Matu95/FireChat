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
        mounted() {
            this.changedBackgorund()
        },
        data() {
            return {}
        },
        methods: {
            changedBackgorund() {
                $('#back').css({
                    "background": this.moz,
                    "background": this.webkit,
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed"
                })
            }
        },
        computed: {
            moz(){
                return "-moz-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%)";
            },
            webkit(){
                return "-webkit-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%)";
            }
        }
    }
</script>