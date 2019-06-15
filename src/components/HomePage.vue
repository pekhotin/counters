<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-container fluid>
          <v-layout>
            <v-flex xs12>
              <v-btn block color="orange" @click="dialog = true">Сообщить о проблеме</v-btn>
              <v-btn block color="primary" class="mt-3">Мои заявки</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Выберите тему проблемы
        </v-card-title>

        <v-card-text>
          <v-flex>
            <v-btn block color="red" to="requests/house">Дом</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="orange" to="requests/street">Двор</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="yellow" to="requests/pd">Подъезд</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="green" to="requests/lift">Лифт</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="blue" to="requests/other">Другое</v-btn>
          </v-flex>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    dialog: false
  })
}
</script>

<style scoped>

</style>
