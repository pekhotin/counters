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
    request: null
  }),
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('http://api.saject.ru/getOrder.php?id=' + this.$route.params.id)
        .then(response => {
          this.request = response.data[0]
        })
      this.$http.get('http://api.saject.ru/getTopics.php')
        .then(response => {
          this.topics = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
