<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card class="mt-4">
      <v-container fluid>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex xs12>
            <v-select
              :items="types"
              label="Тип обращения"
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              outline
              name="input-7-4"
              label="Подбробное описание проблемы"
              value=""
            ></v-textarea>
          </v-flex>
          <v-flex xs12 class="text-xs-right">
            <v-btn color="success">Отправить</v-btn>
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
    types: ['Жалоба', 'Претензия', 'Что там еще?']
  })
}
</script>

<style scoped>

</style>
