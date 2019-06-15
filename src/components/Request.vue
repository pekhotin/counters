<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card class="mt-4">
      <v-container fluid>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex xs12>
            <v-select
              :items="topics"
              v-model="topic"
              label="Тип обращения"
              item-text="name"
              item-value="name"
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="message"
              outline
              label="Подбробное описание проблемы"
              value=""
            ></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-alert
              :value="isSaved"
              type="success"
              transition="scale-transition"
              outline
            >
              Заявка успешно создана!
            </v-alert>
          </v-flex>
          <v-flex xs12 class="text-xs-right">
            <v-btn @click="$refs.inputUpload.click()">Прикрепить фото</v-btn>
            <input v-show="false" ref="inputUpload" type="file" @change="" multiple>
            <v-btn color="success" @click="save()">Отправить</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Request',
  data: () => ({
    topics: ['Жалоба', 'Претензия', 'Что там еще?'],
    topic: null,
    message: null,
    file: null,
    isSaved: false
  }),
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('http://api.saject.ru/getTopics.php?type=' + this.$route.params.type)
        .then(response => {
          this.topics = response.data
        })
    },
    save () {
      this.$http.post('http://api.saject.ru/createRequest.php', {
        user_id: localStorage.getItem('id'),
        topic: this.topic,
        message: this.message,
        file: this.file
      })
        .then(response => {
          this.isSaved = true
        })
    }
  }
}
</script>

<style scoped>

</style>
