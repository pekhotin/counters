<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card class="mt-4">
      <v-container fluid>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex xs12>
            <v-text-field
              :items="types"
              label="Тип обращения"
              outline
              disabled
              v-model="request.topic"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              outline
              label="Статус"
              disabled
              v-model="request.status"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              outline
              label="Подбробное описание проблемы"
              value=""
              disabled
              v-model="request.message"
            ></v-textarea>
          </v-flex>
          <v-flex xs12 class="">
            <h3>История</h3>
            <p>2019-06-16 03:12:59 Житель Иванович создал заявку</p>
            <p>2019-06-16 03:42:19 Исполнитель Камилевич взял заявку в работу</p>
          </v-flex>
          <v-flex xs12 class="text-xs-center">
            Пожалуйста, оцените работу мастера
            <v-rating v-model="rating"></v-rating>
          </v-flex>
          <v-flex xs12 class="text-xs-center">
            <v-btn @click="goBack()" color="primary">Назад</v-btn>
            <v-btn>Пожаловаться и вернуть в работу</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ShowRequest',
  data: () => ({
    types: [],
    request: null,
    rating: 5
  }),
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('https://api.saject.ru/getOrder.php?id=' + this.$route.params.id)
        .then(response => {
          this.request = response.data[0]
        })
      this.$http.get('https://api.saject.ru/getTopics.php')
        .then(response => {
          this.topics = response.data
        })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
