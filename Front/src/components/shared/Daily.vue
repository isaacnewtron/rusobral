<template>
  <v-layout>
    <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 adjustment"
        >
        <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.principal}}</td>
        <td class="text-xs-right">{{ props.item.vegetariano }}</td>
        <td class="text-xs-right">{{ props.item.salada }}</td>
        <td class="text-xs-right">{{ props.item.guarnicao }}</td>
        <td class="text-xs-right">{{ props.item.acompanhamento }}</td>
        <td class="text-xs-right">{{ props.item.suco }}</td>
        <td class="text-xs-right">{{ props.item.sobremesa }}</td>
        </template>
        <template slot="footer">
            <td colspan="100%" >
                <strong style="padding-left: 20px;">*Contém lactose *Contém glúten</strong>
            </td>
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
        text: 'Principal',
        sortable: false,
        value: 'principal'
        },
        { text: 'Vegetariano',sortable:false, value: 'vegetariano' },
        { text: 'Salada',sortable:false, value: 'salada' },
        { text: 'Guarnicao',sortable:false, value: 'guarnicao' },
        { text: 'Acompanhamento',sortable:false, value: 'acompanhamento' },
        { text: 'Suco',sortable:false, value: 'suco' },
        { text: 'Sobremesa',sortable:false, value: 'sobremesa' }
    ],
    items: [
        {
            value: false,
            principal: 'Opção 1',
            vegetariano: 'Opção 1',
            salada:'Opção 1',
            guarnicao:'Opção 1',
            acompanhamento:'Opção 1',
            suco:'Opção 1',
            sobremesa:'Opção 1'
        },{
            value: false,
            principal: 'Opção 1',
            vegetariano: 'Opção 1',
            salada:'Opção 1',
            guarnicao:'Opção 1',
            acompanhamento:'Opção 1',
            suco:'Opção 1',
            sobremesa:'Opção 1'
        },{
            value: false,
            principal: 'Opção 1',
            vegetariano: 'Opção 1',
            salada:'Opção 1',
            guarnicao:'Opção 1',
            acompanhamento:'Opção 1',
            suco:'Opção 1',
            sobremesa:'Opção 1'
        },{
            value: false,
            principal: 'Opção 1',
            vegetariano: 'Opção 1',
            salada:'Opção 1',
            guarnicao:'Opção 1',
            acompanhamento:'Opção 1',
            suco:'Opção 1',
            sobremesa:'Opção 1'
        },{
            value: false,
            principal: 'Opção 1',
            vegetariano: 'Opção 1',
            salada:'Opção 1',
            guarnicao:'Opção 1',
            acompanhamento:'Opção 1',
            suco:'Opção 1',
            sobremesa:'Opção 1'
        }
        
    ]
  }),
  created(){
    
  },
  methods:{
    
  }
}
</script>
