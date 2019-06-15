<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
      <v-data-table
        :headers="headers"
        :items="requests"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.type }}</td>
          <td class="text-xs-center">{{ props.item.date }}</td>
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
    headers: [
      {
        text: 'Тип',
        align: 'left',
        value: 'type'
      },
      { text: 'Дата', align: 'center', value: 'date' },
      { text: 'Статус', align: 'center', value: 'status' },
      { text: 'Действия', align: 'center', value: 'operations', sortable: false }
    ],
    requests: [{
      id: 1,
      type: '1',
      date: '2',
      status: '3'
    }]
  })
}
</script>

<style scoped>

</style>
