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
        created() {
            this.loadTheme();
        },
        data() {
            return {
                themes: {
                    1: 'dawnAnimated',
                    2: 'vanillaAnimated',
                    3: 'volcanoAnimated',
                    4: 'irisAnimated',
                    5: 'icecreamAnimated'
                }
            }
        },
        methods: {
            loadTheme() {
                $('#theme').attr('class', this.themeRand + ' home');
            }
        },
        computed: {
            themeRand() {
                var key = Math.floor(Math.random() * (6 - 1)) + 1;
                return this.themes[key]
            }
        }
    }

</script>
<style>
    .home {
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

</style>