<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-container fluid>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs12>
              <v-text-field
                label="Фамилия"
                outline
                v-model="firstname"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Имя"
                outline
                v-model="secondname"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Email"
                outline
                v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Мобильный"
                outline
                v-model="phone"
              ></v-text-field>
              <v-checkbox
                v-model="accept"
                label="Согласие об обработке персональных данных"
              ></v-checkbox>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn color="success">Сохранить</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Personal"
}
</script>

<style scoped>

</style>
