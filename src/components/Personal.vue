<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-container fluid>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs12>
              <v-text-field
                label="Фамилия"
                outline
                v-model="firstname"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Имя"
                outline
                v-model="secondname"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Email"
                outline
                v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Телефон"
                outline
                v-model="phone"
              ></v-text-field>
              <v-checkbox
                v-model="accept"
                label="Я согласен с условиями обработки персональных данных"
              >
                <template slot="label">
                  Я согласен с&nbsp;<a href="#" >условиями обработки персональных данных</a>
                </template>
              </v-checkbox>
            </v-flex>
            <p>Используя сайт и мобильное приложение вы принимаете условия <a href="#">публичной оферты</a></p>
            <v-flex xs12>
              <v-alert
                :value="isSaved"
                type="success"
                transition="scale-transition"
                outline
              >
                Успешно сохранено!
              </v-alert>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn @click="goBack()">Назад</v-btn>
              <v-btn @click="save()" color="success">Сохранить</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Personal',
  data: () => ({
    accept: true,
    firstname: null,
    secondname: null,
    email: null,
    phone: null,
    isSaved: false
  }),
  created () {
    this.init()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    init () {
      this.$http.get('http://api.saject.ru/person.php?user_id=' + localStorage.getItem('id'))
        .then(response => {
          this.firstname = response.data.firstname
          this.secondname = response.data.secondname
          this.phone = response.data.phone
          this.email = response.data.email
        })
    },
    save () {
      this.$http.post('http://api.saject.ru/saveperson.php', {
        id: localStorage.getItem('id'),
        firstname: this.firstname,
        secondname: this.secondname,
        phone: this.phone,
        email: this.email
      })
        .then(res => {
          this.isSaved = true
        })
    }
  }
}
</script>

<style scoped>

</style>
