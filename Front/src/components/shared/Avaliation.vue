<template>
  <v-layout>
    <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 adjustment"
        >
        <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{props.item.name}}</td>
            <td>
            <v-radio-group v-model="props.item.ex8" :mandatory="false">
                <v-radio value="1"></v-radio>
            </v-radio-group>
            </td>
            <td>
            <v-radio-group v-model="props.item.ex8" :mandatory="false">
                <v-radio value="2"></v-radio>
            </v-radio-group>
            </td>
            <td>
            <v-radio-group v-model="props.item.ex8" :mandatory="false">
                <v-radio value="3"></v-radio>
            </v-radio-group>
            </td>
            <td>
            <v-radio-group v-model="props.item.ex8" :mandatory="false">
                <v-radio value="4"></v-radio>
            </v-radio-group>
            </td>
            <td>
            <v-radio-group v-model="props.item.ex8" :mandatory="false">
                <v-radio value="5"></v-radio>
            </v-radio-group>
            </td>
        </template>
    </v-data-table>
  </v-layout>
</template>

<style lang="scss">
  .adjustment{
    margin: 12px;
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
        { text: 'Muito Ruim',sortable:false },
        { text: 'Ruim',sortable:false },
        { text: 'Indiferente',sortable:false},
        { text: 'Bom',sortable:false},
        { text: 'Muito Bom',sortable:false}
    ],
    items: [
        {
            value: false,
            name: 'Principal',
            ex8: ''
        }, {
            value: false,
            name: 'Vegetariano',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Salada',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Guarnição',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Acompanhamento',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Suco',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Sobremesa',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Limpeza (Pratos)',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Limpeza (Talheres)',
            ex8: ''
        }, 
        {
            value: false,
            name: 'Limpeza (Ambiente)',
            ex8: ''
        }
    ]
  }),
  created(){
    
  },
  methods:{
    
  }
}
</script>
