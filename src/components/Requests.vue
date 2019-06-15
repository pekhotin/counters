<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="mt-4">
      <v-data-table
        :headers="headers"
        :items="requests"
        :pagination.sync="pagination"
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
      </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Requests',
  data: () => ({
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
      this.$http.get('http://api.saject.ru/getOrders.php?user_id=' + localStorage.getItem('id'))
        .then(response => {
          this.requests = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
