<template>
  <div align="center">

    <div v-if="page == 1">
      <form @submit.prevent="SignUpPassOne()">
        <h1 style="margin-top: 110px">Unete a FireChat</h1>
        <label>E-mail</label>
        <p><input type="email" class="input" placeholder="@example.com" v-model="newUser.email"></p>
        <label>Password</label>
        <p><input type="password" class="input" placeholder="***************" v-model="newUser.password"></p>
        <label>Repeat Password</label>
        <p><input type="password" class="input" placeholder="***************" v-model="newUser.repeatpassword"></p>
        <div style="margin-top: 25px">
          <button class="btn btn-default" v-on:click="registerWithGoogle()" style="color: crimson"><i class="fa fa-google" aria-hidden="true"></i>   Register with Google</button>
          <button type="submit" class="btn btn-default">Register now!</button>
        </div>
      </form>
    </div>

    <div v-if="page == 2">
      <form @submit.prevent="SignUpPassTwo()">
        <div class="col-md-3"></div>

        <div class="col-md-6">
          <h1 style="margin-top: 110px">Bien, ya queda poco! 😊</h1>
          <h5>Necesitamos estos datos...</h5>
          <div class="col-md-6">
            <label>Nombre de Usuario</label>
            <p><input class="input" placeholder="Batman" v-model="dataUser.username"></p>
            <label>Pais</label>
            <p><input class="input" placeholder="Argentina" v-model="dataUser.country"></p>
            <label>Ciudad</label>
            <p><input class="input" placeholder="Mendoza" v-model="dataUser.city">></p>
          </div>
          <div class="col-md-6" style="margin-top: 25px">
            <div class="Image-input">
              <div class="Image-input__image-wrapper">
                <i v-show="! imageSrc" class="icon fa fa-picture-o"></i>
                <img v-show="imageSrc" class="Image-input__image" :src="imageSrc">
              </div>
              <div class="Image-input__input-wrapper">Buscar imagen
                <input @change="previewThumbnail" class="Image-input__input" name="thumbnail" type="file">
              </div>
            </div>
          </div>

          <div style="margin-top: 250px">
            <button type="submit" class="btn btn-primary">Comencemos</button>
          </div>
        </div>

        <div class="col-md-3"></div>
      </form>
    </div>
  </div>

</template>

<script>

    export default {
        name: 'newacount',
        props: ['imageSrc'],
        data() {
            return {
                page: 1,
                newUser: {
                    email: null,
                    password: null,
                    repeatpassword: null,
                },
                dataUser: {
                    username: null,
                    country: null,
                    city: null,
                    uid: null
                }
            }
        },
        methods: {
            SignUpPassOne() {
                if (this.newUser.password == this.newUser.repeatpassword) {
                    firebase.auth().createUserWithEmailAndPassword(
                        this.newUser.email,
                        this.newUser.password,
                    ).then(response => {
                        this.dataUser.uid = response.uid;
                        this.page = 2;
                        this.newUser = {};
                        iziToast.success({
                            title: ':D',
                            message: 'Se registro correctamente!',
                        });
                    }).catch(error => {
                        iziToast.error({
                            title: 'Error',
                            message: error.message,
                        });
                    });
                } else {
                    this.newUser.password = null;
                    this.newUser.repeatpassword = null;
                    iziToast.error({
                        title: 'Error',
                        message: 'Las contraseñas no coinciden',
                    });
                }
            },
            SignUpPassTwo() {
                database.ref('/users').push({
                    username: this.dataUser.username,
                    country: this.dataUser.country,
                    city: this.dataUser.city,
                    uid: this.dataUser.uid
                }).then(() => {
                    iziToast.success({
                        title: ':D',
                        message: 'Te registraste exitosamente, Muchas gracias!',
                    });
                    this.$router.push('/home');
                });
            },
            registerWithGoogle(){
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login')

                firebase.auth().signInWithPopup(provider).then(response => {
                    this.dataUser.uid = response.user.uid;
                    this.newUser = {};
                    iziToast.success({
                        title: ':D',
                        message: 'Se registro correctamente!',
                    });
                }).catch(error => {
                    iziToast.error({
                        title: 'Error',
                        message: error.message,
                    });
                });
            },
            previewThumbnail(event) {
                var input = event.target;
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var vm = this;
                    reader.onload = function (e) {
                        vm.imageSrc = e.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
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

  label {
    color: #BFBFBC;
  }
</style>