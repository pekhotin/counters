<template>
  <div id="app">
    <v-app id="inspire" :dark="dark">
      <!--<v-navigation-drawer-->
        <!--fixed-->
        <!--app-->
        <!--v-model="drawer"-->
        <!--temporary-->
        <!--v-if="isLogged()"-->
      <!--&gt;-->
        <!--<v-list>-->
          <!--<v-list-group-->
            <!--v-for="(item, index) in menu"-->
            <!--:key="index"-->
            <!--prepend-icon="account_circle"-->
            <!--no-action-->
          <!--&gt;-->
            <!--<v-list-tile slot="activator">-->
              <!--<v-list-tile-title>{{ item.name }}</v-list-tile-title>-->
            <!--</v-list-tile>-->
            <!--<v-list-tile-->
              <!--v-for="(subItem, i) in item.child"-->
              <!--:key="i"-->
              <!--:to="subItem.link"-->
              <!--active-class="highlighted"-->
            <!--&gt;-->
              <!--<v-list-tile-title>{{ subItem.name }}</v-list-tile-title>-->
              <!--&lt;!&ndash;<v-list-tile-action>&ndash;&gt;-->
                <!--&lt;!&ndash;<v-icon v-text="'home'"></v-icon>&ndash;&gt;-->
              <!--&lt;!&ndash;</v-list-tile-action>&ndash;&gt;-->
            <!--</v-list-tile>-->
          <!--</v-list-group>-->
          <!--<v-list-tile-->
            <!--@click="logout()"-->
            <!--active-class="highlighted"-->
          <!--&gt;-->
            <!--<v-list-tile-action>-->
              <!--<v-icon v-text="'exit_to_app'"></v-icon>-->
            <!--</v-list-tile-action>-->
            <!--<v-list-tile-title>Выход</v-list-tile-title>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->
      <!--</v-navigation-drawer>-->
      <v-toolbar fixed app>
        <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
        <v-toolbar-title><router-link to="/home" style="text-decoration: none; color: black;">смартЖКХ</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!--<v-btn flat>Link Two</v-btn>-->
          <v-btn flat icon small to="requests" class="ml-3" v-show="isLogged()">
            <v-badge
              color="primary"
              right
              overlap
              small
            >
              <template slot="badge">
                6
              </template>
              <v-icon
                color="grey lighten-1"
                large
              >
                mail
              </v-icon>
            </v-badge>
          </v-btn>
          <v-btn flat icon small to="personal" class="ml-3" v-show="isLogged()">
            <v-badge
              color="primary"
              right
              overlap
            >
              <template slot="badge">
                6
              </template>
              <v-icon
                color="grey lighten-1"
                large
              >
                person
              </v-icon>
            </v-badge>
          </v-btn>
          <v-btn flat icon small to="#" class="ml-3" @click="logout()" v-show="isLogged()">
            <v-icon
              color="grey lighten-1"
              large
            >
              exit_to_app
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view />
      </v-content>
      <!--<v-footer app class="pa-3">-->
        <!--<v-switch-->
          <!--v-model="dark"-->
          <!--:label="`Тёмная тема`"-->
        <!--&gt;</v-switch>-->
        <!--<v-spacer></v-spacer>-->
        <!--&lt;!&ndash;<span>Разработчик <a href="https://vk.com/pekhotin_a" target="_blank">Александр Пехотин</a> &copy; 2019</span>&ndash;&gt;-->
      <!--</v-footer>-->
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dark: false,
    drawer: false
  }),
  methods: {
    isLogged: function () {
      return localStorage.getItem('login') != null
    },
    logout: function () {
      localStorage.removeItem('login')
      localStorage.removeItem('id')
      this.$router.go(0)
    }
  }
}
</script>
