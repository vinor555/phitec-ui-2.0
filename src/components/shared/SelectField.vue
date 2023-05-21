<template>
    <v-col cols="12" :sm="sm" :md="md">
    <v-select
         v-model="text"
         :items="items"
         :item-text="itemtext"
         :item-value="itemvalue"
         :label="label"
         persistent-hint
         :return-object="returnObject"
         single-line
         dense
   ></v-select>
</v-col>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
import {getCatalog} from '@/services/catalogService'
export default {
props: {
       label: {
       type: String,
       required: true,
       },
       valor: {
       type: Number,
       },
       uriCatalog: {
         type: String,
         require: true
       },
       itemtext: {
           type: String,
         require: true
       },
       itemvalue:{
           type: String,
         require: true
       },
       returnObject:{
           type: Boolean
       },
       sm: {
           type: Number,
           default: 6,
       },
       md: {
       type: Number,
       default: 3,
       },
   },
async created() {
   const items = await getCatalog(this.uriCatalog)
   this.items = items;
 },
 data () {
     return {
       text: '',
       items: [ ],
     }
   },
computed: {
   texto: {
     get: function () {
       this.text = this.model;
     },
   },
 },
 watch: {
   text() {
     this.$emit("text", this.text);
   },
   model() {
     this.text = this.model;
   },
 },


}

</script>