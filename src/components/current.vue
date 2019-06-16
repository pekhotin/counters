<template>
  <v-container fluid>
    <v-flex xs12></v-flex>
    <v-sparkline
      :value="values"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

    <v-data-table
      :headers="headers"
      :items="v"

      rows-per-page-text="Записей на странице"
      :rows-per-page-items="rowPerPageItems"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.data_cold }}</td>
        <td class="text-xs-center">{{ props.item.data_hot }}</td>
        <td class="text-xs-center">{{ props.item.temperature }}</td>
      </template>
      <template slot="no-data">
        <v-btn @click="initialize">Обновить</v-btn>
      </template>
      <template slot="pageText" slot-scope="props">
        Показаны {{ props.pageStart }}-{{ props.pageStop }} из {{ props.itemsLength }}
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow', 'green'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]
export default {
  name: 'current',
  data: () => ({
    rowPerPageItems: [10],
    headers: [
      { text: 'Счетчик ХВС', align: 'center', value: 'data_cold' },
      { text: 'Счетчик ГВС', align: 'center', value: 'data_hot' },
      { text: 'Температура', align: 'center', value: 'temperature' }
    ],
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[2],
    values: [],
    v: [],
    gradientDirection: 'top',
    gradients
    // values: []
  }),
  created () {
    this.init()
  },
  methods: {
    init () {
      setInterval(() => {
        this.$http.get('https://api.saject.ru/getTemp.php')
          .then(response => {
            this.v = response.data
            this.values = response.data.map(el => Number(el.temperature))
            console.log(this.values)
          })
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
