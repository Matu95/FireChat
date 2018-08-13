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
      <router-view></router-view>
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
            }
        },
        methods: {
            theme() {
                $('#theme').attr('class' ,'vanilla');
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
        }
    }
</script>

<style>

  .username {
    font-size: x-small;
    font-style: italic;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  .scrollbar {
    margin: 10px;
    height: 570px;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    overflow-y: auto;
    margin-bottom: 25px;
  }

  #style-1::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }

  .chat {
    margin: 24px auto 0 auto;
    padding: 0 20px 0 0;
  }
  a{
    font: 16px/20px 'Noto Sans', sans-serif;
  }
  .chat li {
    position: relative;
    clear: both;
    display: inline-block;
    padding: 16px 40px 16px 20px;
    margin: 0 0 20px 0;
    font: 16px/20px 'Noto Sans', sans-serif;
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  .chat li {
    animation: show-chat-odd 0.15s 1 ease-in;
    -moz-animation: show-chat-odd 0.15s 1 ease-in;
    -webkit-animation: show-chat-odd 0.15s 1 ease-in;
    float: left; /* change right 1v1*/
    margin-right: 80px;
    color: #0AD5C1;
  }

  #img {
    list-style-image: url('https://mdn.mozillademos.org/files/11981/starsolid.gif');
  }

  .chat-thread li {
    position: relative;
    clear: both;
    display: inline-block;
    padding: 16px 40px 16px 20px;
    margin: 0 0 20px 0;
    font: 16px/20px 'Noto Sans', sans-serif;
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  /* Chat - Avatar */
  .chat-thread li:before {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    content: '';
  }

  /* Chat - Speech Bubble Arrow */
  .chat-thread li:after {
    position: absolute;
    top: 15px;
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
  }

  .chat-thread li:nth-child(odd) {
    animation: show-chat-odd 0.15s 1 ease-in;
    -moz-animation: show-chat-odd 0.15s 1 ease-in;
    -webkit-animation: show-chat-odd 0.15s 1 ease-in;
    float: right;
    margin-right: 80px;
    color: #0AD5C1;
  }

  .chat-thread li:nth-child(odd):before {
    right: -80px;
    background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAASAAAATgAAAAAAAABgAAAAAQAAAGAAAAABUGFpbnQuTkVUIHYzLjUuMTAA/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgAMgAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8wre0/w55qLLqM62ysMrEWAdh+PSl8M6fFLMbu5K7YziNT3b1/CqniRLq98UA2SlhHGobnA55FdbajHmZwxTnLlRtm78NabDGhs/tEwchmVfMGD0znvn0pqahoN3fCH+z0RcHcWiKY4745/KuUVtTtdSFtJCvmxHmN+317Gp5dTthGZXUSXPJJVsh1PUH1rP2rZt7GKOi1LwxHIv2jRg20jPks4b64b+h/OuZZWRyrqVZTggjBBrZ0PWftFwkA8xImTpu7gVJr1kpX7UhzJ0cZ5I9a0umtDJxcWYVFFFBJ1WlKkOmQASYyoYjZnk81aukuLHTP7YFtDeW6zJEFmyu4555H8PQemaz9NmR9PhO45C7T+HFa1rrk9iwSZ3vLJU+WyaVUCsDncMjJI64H41riYRVHmS7E4KbliOWT7nPePtPvbm8j1trWSyF3GpkgkYEbl4BBHTjHBrn49GkfRLnUpn2tBgtFj76k4GD/e749K63xb4gtdTtp4LeRismGVyOmDnpWBq2pXd74ZsdPjG2GCTdHDEnzSN/ebHLH+VeXBuyR7E4wu35EXhKKObVCRnMKMwY+hwAPz5rrJ7bzYXTfu3Ag5yKwfC+nNZvcPPJHvdQDGnJjOehPTPsOlb0zLFA8m/hVJ/SvXo0oundnhV6slU5UcjRRRXPY3Luk3giYwSHCscqfetfULXOlR3TXIhZ2ZYfLILHHDkjsO3PJPSuXqeC5aPzd5ZjIQdxOcEDFa+0fJyEKmvac5myyQWJlRZnkkTHytjoeuPepLaa9vi4ib7LbOMyFG5KjtnrVMabPd30gcrCjMSZGPQf1NbF0i29pHBAUlbABVT8pPqSOwrljDW53c+lrl/RWxvymyDAWPjsPSpdVnVF8iNsk8tz0HpVFLloowEYvJjBkIwB7AdhUGSxJJyT1JrpU2o8py1IwlJS6hRS0VAiKiiikUKKUUUUxC0ooooAKKKKQH/2Q==);
  }

  .chat-thread li:nth-child(odd):after {
    border-right: 15px solid transparent;
    right: -15px;
  }

  .chat-thread li:nth-child(even) {
    animation: show-chat-even 0.15s 1 ease-in;
    -moz-animation: show-chat-even 0.15s 1 ease-in;
    -webkit-animation: show-chat-even 0.15s 1 ease-in;
    float: left;
    margin-left: 80px;
    color: #0EC879;
  }

  .chat-thread li:nth-child(even):before {
    left: -80px;
    background-image: url(data:image/jpeg;base64,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);
  }

  .chat-thread li:nth-child(even):after {
    border-left: 15px solid transparent;
    left: -15px;
  }

  .chat-window {
    position: fixed;
    bottom: 18px;
  }

  .chat-window-message {
    width: 100%;
    font: 32px/48px 'Noto Sans', sans-serif;
    background: rgba(25, 147, 147, 0.2);
    color: #0AD5C1;
    border: 0;
    border-bottom: 1px solid rgba(25, 147, 147, 0.2);
    outline: none;
  }

  /* Small screens */
  @media all and (max-width: 767px) {
    .chat-thread {
      width: 90%;
      height: 260px;
    }

    .chat-window {
      left: 5%;
      width: 90%;
    }
  }

  /* Medium and large screens */
  @media all and (min-width: 768px) {
    .chat-thread {
      width: 50%;
      height: 320px;
    }

    .chat-window {
      left: 25%;
      width: 50%;
    }
  }

  @keyframes show-chat-even {
    0% {
      margin-left: -480px;
    }
    100% {
      margin-left: 0;
    }
  }

  @-moz-keyframes show-chat-even {
    0% {
      margin-left: -480px;
    }
    100% {
      margin-left: 0;
    }
  }

  @-webkit-keyframes show-chat-even {
    0% {
      margin-left: -480px;
    }
    100% {
      margin-left: 0;
    }
  }

  @keyframes show-chat-odd {
    0% {
      margin-right: -480px;
    }
    100% {
      margin-right: 0;
    }
  }

  @-moz-keyframes show-chat-odd {
    0% {
      margin-right: -480px;
    }
    100% {
      margin-right: 0;
    }
  }

  @-webkit-keyframes show-chat-odd {
    0% {
      margin-right: -480px;
    }
    100% {
      margin-right: 0;
    }
  }

  .box
  {
    height: 100%;
    background-color: rgba(25, 147, 147, 0.2);
    margin: 10px;
  }


/*
Contactos
*/
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin-left: 25px;
    display: flex;
    margin-bottom: 25px;
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  .content{
    margin-left: 10px;
  }

  a.author{
    font-weight: 600;
    font-size: 14px;
    color: #000;
  }
</style>
