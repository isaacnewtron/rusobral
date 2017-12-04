<template>
  <v-speed-dial
    v-model="fab"
    absolute
    fixed
    bottom
    right
    hover
    direction="top"
    transition="slide-y-reverse-transition"
  >
    <v-btn
      slot="activator"
      color="blue darken-2"
      dark
      fab
      hover
      v-model="fab"
    >
      <v-icon>add</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      dark
      round
      small
      color="blue darken-2"
      @click="() => {clicked = 'talk_with_us'}"
    >
      Fale Conosco
    </v-btn>
    <v-btn
      dark
      round
      small
      color="blue darken-2"
      @click="() => {clicked = 'poll'}"
    >
      Enquetes
    </v-btn>
    <v-btn
      dark
      round
      small
      color="blue darken-2"
      @click="() => {clicked = 'avaliate'}"
    >
      Avaliar
    </v-btn>
    <v-btn
      dark
      round
      small
      color="blue darken-2"
      @click="() => {clicked = 'full_menu'}"
    >
      Cardápio completo
    </v-btn>
    <v-btn
      dark
      round
      small
      color="blue darken-2"
      @click="() => {clicked = 'daily_menu'}"
    >
      Cardápio diário
    </v-btn>
  </v-speed-dial>
</template>

<style lang="scss">
  .speed-dial--bottom.speed-dial--absolute{
    bottom: 10%;
  }
  .speed-dial__list {
    align-items: flex-end !important;
  }
  .adjustment{
    margin-left: 30px;
  }
</style>

<script>
export default {
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    clicked(newClicked) {
      this.$emit('update:clicked',newClicked);
    }
  },
  data:() => ({
    icon: '',
    fab: false,
    clicked: ''
  }),
  created(){
    
  },
  methods:{
        
  }
}
</script>
