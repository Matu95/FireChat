<template>
    <div>
        <div class="scrollbar" id="style-1">
            <ul class="chat" id="img">
            <li v-for="(message, index) in messages" :key="index">
                <img src="../../assets/img/user.png">
                <span contenteditable="true" @blur="updateMessage($event, message.key)">{{message.message}}</span>
                <span class="username">{{message.username}}</span>
            </li>
            </ul>
        </div>
        <form @submit.prevent="sendMessage()">
            <input class="chat-window-message" type="text" autocomplete="off" autofocus v-model="user.message" required>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            this.theme();
            this.FireBaseFindBy();
        },
        created() {
            database.ref('/chats').on('value', snapshot => this.loadMessage(snapshot.val()));
            database.ref('/users').on('value', snapshot => this.loadUsers(snapshot.val()));
        },
        data() {
            return {
                user: {
                    username: null,
                    country: null, 
                    city: null
                },
                users: [],
                messages: []
            }
        },
        methods: {
            theme() {
                $('#theme').attr('class' ,'vanilla');
            },

            loadMessage(messages) {
                this.messages = [];
                for (let key in messages) {
                    this.messages.push({
                        message: messages[key].message,
                        username: messages[key].username,
                        key: key
                    });
                }
            },

            loadUsers(users) {
                this.users = users;
            },

            FireBaseFindBy() {
              let self = this;
              database.ref('users').orderByChild('uid').equalTo(localStorage.getItem('userUID')).on("value", function(snapshot) {
                  var array = $.map(snapshot.val(), function(value, index) {
                      return [value];
                  });
                  self.user = array[0];
              });
            },

            sendMessage() {
                database.ref('chats').push({
                    message: this.user.message,
                    uid: this.user.uid
                }).then(() => {
                    this.user.message = '';
                });
            },

            updateMessage(message, key) {
                database.ref('/chats/' + key).update({
                    message: message.target.innerHTML
                });
            }
        }
    }
</script>
