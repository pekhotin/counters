<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid>
          <v-layout>
            <v-flex xs12>
              <v-sparkline
                :key="String(avg)"
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :value="values"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'current',
  data: () => ({
    values: []
  }),
  methods: {
    init () {
      this.$http.get('https://api.saject.ru/getTemp.php')
        .then(response => {
          this.values = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
