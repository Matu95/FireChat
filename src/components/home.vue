<template>
  <div class="row container-fluid">
    <div class="col-5">
      <div class="box">
        <div class="box-header">
          <div ><br>
            <ul class="nav nav-pills">

            </ul>
          </div>
        </div>
        <div class="box-body">
          <div class="list-wrapper">
            <ul>
              <li class="curson-pointer" v-for="(user, index) in users" :key="index">
                <a class="" href="#">
                  <img src="../assets/img/user.png">
                </a>
                <div class="content">
                  <a class="author" href="#">{{ user.username }}</a>
                  <div class="subContent">{{ user.country }} - {{ user.city }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="scrollbar" id="style-1">
        <ul class="chat" id="img">
          <li v-for="(message, index) in messages" :key="index">
            <img src="../assets/img/user.png">
            <span contenteditable="true" @blur="updateMessage($event, message.key)">{{message.message}}</span>
            <span class="username">{{message.username}}</span>
          </li>
        </ul>
      </div>
      <form @submit.prevent="sendMessage()">
        <input class="chat-window-message" type="text" autocomplete="off" autofocus v-model="user.message" required>
      </form>
    </div>
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
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
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
