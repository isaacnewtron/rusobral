<template>
  <v-app>
    <toolbar :key="$route.fullPath" app :title="clicked"></toolbar>
    <main app>
      <v-content>
        <v-container fluid>
            <v-layout row style="margin-top:20px;" v-show="clicked==='full_menu'">
                <v-layout column>
                    <span class="title" style="margin: 5px 10px;">Almoço</span>
                    <full-menu />
                </v-layout>
                <v-layout column>
                    <span class="title" style="margin: 5px 10px;">Jantar</span>
                    <full-menu />
                </v-layout>
            </v-layout>
            <v-layout column v-show="clicked==='daily_menu'" style="margin: 20px;">
                <span class='title'> Almoço</span>
                <daily-menu :items="itemsAlmoco" />
                <span class='title'> Jantar</span>
                <daily-menu :items="itemsJanta" />
            </v-layout>
            <talk-with-us v-show="clicked === 'talk_with_us'"/>
            <v-layout column v-show="clicked==='avaliate'">
                <v-layout row style="margin-top:20px;" >
                    <v-layout column>
                        <span class="title" style="margin: 5px 10px;">Almoço</span>
                        <avaliate />
                    </v-layout>
                    <v-layout column>
                        <span class="title" style="margin: 5px 10px;">Jantar</span>
                        <avaliate />
                    </v-layout>
                </v-layout>
                <v-layout style="margin-top: 30px;" row>
                <v-spacer></v-spacer>
                <v-btn primary>Enviar</v-btn> 
                <v-spacer></v-spacer>
                </v-layout>
            </v-layout>
            <poll v-show="clicked === 'poll'" />
        </v-container>
      </v-content>
            <fab :clicked.sync="clicked" />
    </main>
  </v-app>
</template>

<style lang="scss" scoped>
  .dashboard{
    margin: 16px;
    
  }
</style>

<script>
  import Toolbar from '@/components/shared/Toolbar.vue'
  import FAB from '@/components/shared/FAB.vue'
  import Menu from '@/components/shared/Menu.vue'
  import Daily from '@/components/shared/Daily.vue'
  import TalkWithUs from '@/components/shared/TalkWithUs.vue'
  import Avaliation from '@/components/shared/Avaliation.vue'
  import Poll from '@/components/shared/Poll.vue'
  import _ from 'lodash'

  export default {
    components:{
      'toolbar': Toolbar,
      'full-menu': Menu,
      'daily-menu': Daily,
      'talk-with-us': TalkWithUs,
      'avaliate': Avaliation,
      'poll': Poll,
      'fab': FAB
    },
    created(){
     
    },
    data:() => ({
      clicked: 'daily_menu',
      itemsAlmoco: [
        {
            value: false,
            principal: 'Isca de carne acebolada',
            vegetariano: 'Croquete de lentinha',
            salada:'Acelga, repolho e tomate',
            guarnicao:'Macarrão parafuso **',
            acompanhamento:'Arroz com passas',
            suco:'Vermelho',
            sobremesa:'Melão'
        },{
            value: false,
            principal: 'Frango ao molho de legumes',
            vegetariano: '',
            salada:'',
            guarnicao:'',
            acompanhamento:'Arroz Integral',
            suco:'Amarelo',
            sobremesa:'Doce'
        },{
            value: false,
            principal: '',
            vegetariano: '',
            salada:'',
            guarnicao:'',
            acompanhamento:'Feijão preto',
            suco:'',
            sobremesa:''
        }
        
    ],itemsJanta: [
        {
            value: false,
            principal: 'Picadinho de carne à primavera',
            vegetariano: 'Panqueca de soja',
            salada:'Alface, cenoura e tomate',
            guarnicao:'Farofa',
            acompanhamento:'Arroz branco',
            suco:'Vermelho',
            sobremesa:'Laranja'
        },{
            value: false,
            principal: 'Filé de frango ao molho branco*',
            vegetariano: '',
            salada:'',
            guarnicao:'',
            acompanhamento:'Arroz Integral',
            suco:'Amarelo',
            sobremesa:'Doce'
        },{
            value: false,
            principal: '',
            vegetariano: '',
            salada:'',
            guarnicao:'',
            acompanhamento:'Feijão carioca',
            suco:'',
            sobremesa:''
        }
        
    ]
    }),
    methods:{
      
    }
  }
</script>