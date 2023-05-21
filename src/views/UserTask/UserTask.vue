<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col md="3" cols="12">
          <v-card class="border-radius-xl card-shadow">
            <div class="px-6 py-6 text-center">
              <h1 class="text-gradient text-primary font-weight-bolder text-h1">
                <span>21</span>
                <span class="text-lg">Tickets</span>
              </h1>
              <h6 class="mb-0 text-h6 font-weight-bolder text-typo">
                Total Asignados
              </h6>
              <p class="opacity-8 mb-0 text-sm text-typo">Acumulado</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" cols="12">
          <v-card class="border-radius-xl card-shadow">
            <div class="px-6 py-6 text-center">
              <h1 class="text-gradient text-primary font-weight-bolder text-h1">
                <span>5</span>
                <span class="text-lg ms-1">Tickets</span>
              </h1>
              <h6 class="mb-0 text-h6 font-weight-bolder text-typo">Asignados</h6>
              <p class="opacity-8 mb-0 text-sm text-typo">Asignados hoy</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" cols="12">
          <v-card class="border-radius-xl card-shadow">
            <div class="px-6 py-6 text-center">
              <h1 class="text-gradient text-primary font-weight-bolder text-h1">
                <span>0</span>
                <span class="text-lg">Tickets</span>
              </h1>
              <h6 class="mb-0 text-h6 font-weight-bolder text-typo">Atrazados</h6>
              <p class="opacity-8 mb-0 text-sm text-typo">Tickets atrazados</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" cols="12">
          <v-card class="border-radius-xl card-shadow">
            <div class="px-6 py-6 text-center">
              <h1 class="text-gradient text-primary font-weight-bolder text-h1">
                <span>99</span>
                <span class="text-lg ms-1">%</span>
              </h1>
              <h6 class="mb-0 text-h6 font-weight-bolder text-typo">
                Efectividad
              </h6>
              <p class="opacity-8 mb-0 text-sm text-typo">Tickets a tiempo/Total Tickets</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row >
        <v-col lg="6" class="pt-0 mb-lg-0 mb-10">
          <TaskList></TaskList>
        </v-col>
        <v-col lg="6" class="pt-0 mb-lg-0 mb-10">
          <TaskDetail></TaskDetail>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import TaskList from './Widgets/TasksList.vue'
import TaskDetail from './Widgets/TaskDetail.vue'
// import CardDailySales from './Widgets/CardDailySales.vue'
// import CardCompletedTasks from './Widgets/CardCompletedTasks.vue'

export default {
  name: 'UserTask',
  components: {
    TaskList,
    TaskDetail
  },
  data () {
    return {
      imageCards: [
        {
          image: require('@/assets/img/product-1-min.jpeg'),
          title: 'Cozy 5 Stars Apartment',
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: '899',
          location: 'Barcelona, Spain'
        },
        {
          image: require('@/assets/img/product-2-min.jpeg'),
          title: 'Office Studio',
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: '1.119',
          location: 'London, UK'
        },
        {
          image: require('@/assets/img/product-3-min.jpeg'),
          title: 'Beautiful Castle',
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: '459',
          location: 'Milan, Italy'
        }
      ]
    }
  }
}
</script>
