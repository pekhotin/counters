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

        <!--<v-btn-->
          <!--color="pink"-->
          <!--flat-->
          <!--@click="snackbar = false"-->
        <!--&gt;-->
          <!--Close-->
        <!--</v-btn>-->
      </v-snackbar>
    </v-card>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход в личный кабинет</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <v-btn slot="activator" icon href="https://ptpit.ru" target="_blank">
                    <v-icon>home</v-icon>
                  </v-btn>
                  <span>На главную</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Пользователь" type="text" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Пароль" type="password" id="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
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
        this.$http.post('http://my-api.ptpit.ru/login', {
          username: this.username,
          password: this.password
        })
          .then(response => {
            console.log(response)
            // let is_admin = response.data.user.is_admin
            // localStorage.setItem('user',JSON.stringify(response.data.user))
            if (response.data.token != null) {
              localStorage.setItem('jwt', response.data.token)
              if (localStorage.getItem('jwt') != null) {
                this.$emit('loggedIn')
                if (this.$route.params.nextUrl != null) {
                  this.$router.push(this.$route.params.nextUrl)
                } else {
                  this.$router.push('timetable')
                }
              }
            } else {
              console.error(response.data.message)
              this.snackbar = true
              this.error = response.data.message
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
