<template>
  <v-app id="inspire">
    <v-card>
      <v-snackbar
        v-model="snackbar"
        :timeout="6000"
        top
        color="red"
      >
        <v-icon>warning</v-icon>
        <span>{{ error }}</span>

      </v-snackbar>
    </v-card>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Войти в личный кабинет</v-toolbar-title>
                <v-spacer></v-spacer>
                <!--<v-tooltip right>-->
                  <!--<v-btn slot="activator" icon target="_blank">-->
                    <!--<v-icon>home</v-icon>-->
                  <!--</v-btn>-->
                  <!--<span>На главную</span>-->
                <!--</v-tooltip>-->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Телефон или email" type="text" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Пароль" type="password" id="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <a href="#" class="my-icon my-icon-vk mr-2 ml-3"></a>
                <a href="#" class="my-icon my-icon-f mr-2"></a>
                <a href="#" class="my-icon my-icon-gos"></a>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="login">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    username: '',
    password: '',
    snackbar: false,
    error: ''
  }),
  props: {
    source: String
  },
  methods: {
    login: function () {
      if (this.password.length > 0) {
        this.$http.post('http://api.saject.ru/auth.php?qwe=qwe', {
          login: this.username,
          pass: this.password
        })
          .then(response => {
            console.log(response)
            // let is_admin = response.data.user.is_admin
            // localStorage.setItem('user',JSON.stringify(response.data.user))
            if (response.data != null && response.data !== '') {
              localStorage.setItem('login', response.data.login)
              localStorage.setItem('id', response.data.id)
              if (localStorage.getItem('login') != null) {
                this.$router.push('home')
              }
            } else {
              this.snackbar = true
              this.error = 'Ошибка авторизации'
            }
          })
          .catch(function (error) {
            console.error(error.response.data.message)
            this.snackbar = true
            this.error = error.response.data.message
          })
      }
    }
  }
}
</script>

<style>
  .my-icon {
    width: 40px;
    height: 40px;
    background: url(data:image/png;base64,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);
  }
  .my-icon-vk {
    background-position: 0 0;
  }
  .my-icon-f {
    background-position: 40px 0;
  }
  .my-icon-gos {
    background-position: 81px 0;
  }
</style>
