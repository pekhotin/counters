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
          <td class="text-xs-center">
            <v-btn small :to="'/requests/' + props.item.id">Открыть</v-btn>
          </td>
          <td class="text-xs-center">{{ props.item.datetime_create }}</td>
          <td class="text-xs-center">{{ props.item.status }}</td>
          <td class="text-xs-center">{{ props.item.topic }}</td>
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
    rowPerPageItems: [20, 50, {'text': 'Все', 'value': -1}],
    pagination: {
      sortBy: 'datetime_create'
    },
    headers: [
      { text: 'Действия', align: 'center', value: 'operations', sortable: false },
      { text: 'Создана', align: 'center', value: 'datetime_create' },
      { text: 'Статус', align: 'center', value: 'status' },
      { text: 'Тип', align: 'center', value: 'topic' }
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
