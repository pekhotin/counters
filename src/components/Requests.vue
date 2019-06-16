<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="mt-4">
      <v-data-table
        :headers="headers"
        :items="requests"
        :pagination.sync="pagination"
        rows-per-page-text="Записей на странице"
        :rows-per-page-items="rowPerPageItems"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.topic }}</td>
          <td class="text-xs-center">{{ props.item.datetime_create }}</td>
          <td class="text-xs-center">{{ props.item.status }}</td>
          <td class="text-xs-center">
            <v-btn small :to="'/requests/' + props.item.id">Подробнее</v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn @click="initialize">Обновить</v-btn>
        </template>
        <template slot="pageText" slot-scope="props">
          Показаны {{ props.pageStart }}-{{ props.pageStop }} из {{ props.itemsLength }}
        </template>
      </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Requests',
  data: () => ({
    rowPerPageItems: [5, 20, 25, {'text': 'Все', 'value': -1}],
    pagination: {
      sortBy: 'status'
    },
    headers: [
      {
        text: 'Тип',
        align: 'left',
        value: 'topic'
      },
      { text: 'Дата', align: 'center', value: 'datetime_create' },
      { text: 'Статус', align: 'center', value: 'status' },
      { text: 'Действия', align: 'center', value: 'operations', sortable: false }
    ],
    requests: []
  }),
  created: () => {},
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('https://api.saject.ru/getOrders.php?user_id=' + localStorage.getItem('id'))
        .then(response => {
          this.requests = response.data
        })
      this.$http.get('https://api.saject.ru/viewNotifications.php?user_id=' + localStorage.getItem('id'))
      this.$emit('viewNotifs')
    }
  }
}
</script>

<style scoped>

</style>
