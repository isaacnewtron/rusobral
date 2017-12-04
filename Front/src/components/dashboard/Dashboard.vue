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
                <daily-menu />
                <span class='title'> Jantar</span>
                <daily-menu />
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
      clicked: 'full_menu'
    }),
    methods:{
      
    }
  }
</script>