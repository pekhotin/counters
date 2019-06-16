<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <div class="text-xs-center mt-2">
        <div class="types" :class="{ active: type === 1 }">
          <img :src="img1" @click="type = 1">
          <br>
          <span style="margin-left: 13px;">
          Жилец
          <v-btn flat icon color="grey" style="margin-left: -8px;" @click="openDialog(1)">
            <v-icon size="20">help_outline</v-icon>
          </v-btn>
          </span>
        </div>
        <div class="types" :class="{ active: type === 2 }">
          <img :src="img2" @click="type = 2">
          <br>
          <span style="margin-left: 13px;">
          ЖКХ
          <v-btn flat icon color="grey" style="margin-left: -8px;" @click="openDialog(2)">
            <v-icon size="20">help_outline</v-icon>
          </v-btn>
          </span>
        </div>
        <div class="types" :class="{ active: type === 3 }">
          <img :src="img3" @click="type = 3">
          <br>
          <span style="margin-left: 13px;">
          Подрядчик
          <v-btn flat icon color="grey" style="margin-left: -8px;" @click="openDialog(3)">
            <v-icon size="20">help_outline</v-icon>
          </v-btn>
          </span>
        </div>
      </div>
      <v-card class="mt-4">
        <v-container fluid>
          <v-layout>
            <v-flex xs12 v-show="type === 1">
              <v-btn block color="primary" @click="dialog = true">Сообщить о проблеме</v-btn>
              <v-btn block class="mt-3" to="requests">Мои заявки</v-btn>
              <v-btn block class="mt-3">Мои счетчики</v-btn>
              <v-btn block class="mt-3">Отправить показания</v-btn>
              <v-btn block color="success" class="mt-3" @click="dialog3 = true">Пополнить счёт</v-btn>
            </v-flex>
            <v-flex xs12 v-show="type === 2">
              <v-btn block color="primary">Заявки моих жильцов</v-btn>
              <v-btn block class="mt-3">Мои подрядчики/запросы</v-btn>
              <v-btn to="/current" block class="mt-3">Показания учета приборов</v-btn>
              <v-btn block class="mt-3" @click="dialog5 = true">Получить отзывы из соцсетей</v-btn>
              <v-btn block class="mt-3">Печать заказ-нарядов, счетов и актов</v-btn>
              <v-btn block color="success" class="mt-3" @click="dialog3 = true">Пополнить счёт</v-btn>
            </v-flex>
            <v-flex xs12 v-show="type === 3">
              <v-btn block color="primary" @click="dialog4 = true">Доступные заявки рядом</v-btn>
              <v-btn block class="mt-3">Мои Заказчики (ТСЖ, УК, ФЛ) и запросы аккредитации</v-btn>
              <v-btn block class="mt-3">Мои сотрудники на карте</v-btn>
              <v-btn block class="mt-3">Мои заявки</v-btn>
              <v-btn block class="mt-3">Отчетность и печать договов/актов</v-btn>
              <v-btn block color="success" class="mt-3">Вывод средств</v-btn>
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
            <v-btn block color="success" to="requests/create/flat">Квартира</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="yellow" to="requests/create/entrance">Подъезд</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="orange" to="requests/create/house">Дом</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="primary" to="requests/create/yard">Двор</v-btn>
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

    <v-dialog
      v-model="dialog2"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          v-if="dialog2type === 1"
        >
          Для Жильцов
        </v-card-title>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          v-if="dialog2type === 2"
        >
          Для ТСЖ и УК
        </v-card-title>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          v-if="dialog2type === 3"
        >
          Для Подрядчика и Исполнителя
        </v-card-title>

        <v-card-text v-if="dialog2type === 1">
          <ul>
            <li>Удобное приложение смартЖКХ - одно окно ко всем службам по вопросам ЖКХ</li>
            <li>Автоматическое создание заявок от умных датчиков в доме (протечка, тепло)</li>
            <li>СМС и e-mail уведомления о плановых и аварийных работах</li>
            <li>Получение счетов и квитанций</li>
            <li>Прозрачная отчетность и рейтинги доверия ТСЖ/УК/Подрядчиков</li>
          </ul>
        </v-card-text>
        <v-card-text v-if="dialog2type === 2">
          <ul>
            <li>Цифровизация и автоматизация взаимоотношений с Подрядчиками и Жильцами</li>
            <li>Доступ к пулу надежных Подрядчиков, специализирующихся на различных услугах для ЖКХ</li>
            <li>Оперативное закрытие потребностей в вахтерах, дворниках, снегоуборщиках, спецтехнике</li>
            <li>Сбор отзывов из социальных сетей (ВК, ОК, Ин, Фб) с возможностью реагирования и формирования заявки</li>
            <li>Выгрузка отчетов в платформу ГИС ЖКХ, типовые документы и консультации юристов, отраслевых экспертов</li>
          </ul>
        </v-card-text>
        <v-card-text v-if="dialog2type === 3">
          <ul>
            <li>Единое окно организации взаимоотношений с УК, ТСЖ и Жильцами</li>
            <li>Доступ к пулу потенциальных заказчиков услуг, (приоритет при наличии страхового депозита на платформе «смартЖКХ»)</li>
            <li>Отчет о выполненных работах по заявкам (с использованием геометок и фотоотчета) в CRM</li>
            <li>Выбор собственной загрузки в зависимости от удаленности объекта, регулярности работы, рейтинга собственника</li>
            <li>Регулярные выплаты на карту по итогам закрытых заявок</li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog2 = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog3"
      width="535"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Пополнение
        </v-card-title>

        <v-card-text>
          <iframe class="iframe" src="https://money.yandex.ru/fastpay/form/ca785a2678254e19947bbd3fd7fca557" width="500" height="356" style="border: 1px solid #e8e8e8;"></iframe>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog3 = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog4"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Доступные заявки
        </v-card-title>

        <v-card-text>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A722f7eddc3a3928d6354162f818fc94b6d3e6b227e4aab5540014a5da8ec51d2&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog4 = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog5"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Отзывы соц. сетей
        </v-card-title>

        <v-card-text>
          <img :src="soc" width="100%">
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog5 = false"
          >
            Закрыть
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
    dialog: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    img1: require('@/assets/234-man-raising-hand-1-128.png'),
    img2: require('@/assets/154-man-office-worker-2-128.png'),
    img3: require('@/assets/145-man-mechanic-1-128.png'),
    soc: require('@/assets/image.png'),
    type: 1,
    dialog2type: 1
  }),
  methods: {
    openDialog (temp) {
      this.dialog2type = temp
      this.dialog2 = true
    }
  }
}
</script>

<style scoped>
  .types {
    display: inline-block;
    border: 1px solid transparent;
  }

  .types:hover {
    border: 1px solid #00bcd4;
    cursor: pointer;
  }

  .active, .types:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .scroll {
    height: 250px !important;
  }
</style>
