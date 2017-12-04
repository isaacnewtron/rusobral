<template>
  <v-layout>
    <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 adjustment"
        >
        <template slot="items" slot-scope="props">
        <td class="text-xs-left caption">{{ props.item.name }}</td>
        <td class="text-xs-right caption">{{ props.item.seg }}</td>
        <td class="text-xs-right caption">{{ props.item.ter }}</td>
        <td class="text-xs-right caption">{{ props.item.qua }}</td>
        <td class="text-xs-right caption">{{ props.item.qui }}</td>
        <td class="text-xs-right caption">{{ props.item.sex }}</td>
        </template>
    </v-data-table>
  </v-layout>
</template>

<style lang="scss">
  .adjustment{
    margin: 20px;
  }
</style>

<script>
export default {
  data:() => ({
    headers: [
        {
        text: '',
        sortable: false,
        value: 'name'
        },
        { text: 'Segunda',sortable:false, value: 'seg' },
        { text: 'Terça',sortable:false, value: 'ter' },
        { text: 'Quarta',sortable:false, value: 'qua' },
        { text: 'Quinta',sortable:false, value: 'qui' },
        { text: 'Sexta',sortable:false, value: 'sex' }
    ],
    items: [
        {
            value: false,
            name: 'Principal',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Vegetariano',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Salada',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Guarnição',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Acompanhamento',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Suco',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }, {
            value: false,
            name: 'Sobremesa',
            seg: 'Opção 1 \n Opção 2 \n Opção 3',
            ter: 'Opção 1 \n Opção 2 \n Opção 3',
            qua: 'Opção 1 \n Opção 2 \n Opção 3',
            qui: 'Opção 1 \n Opção 2 \n Opção 3',
            sex: 'Opção 1 \n Opção 2 \n Opção 3',
        }
    ]
  }),
  created(){
    
  },
  methods:{
    
  }
}
</script>
