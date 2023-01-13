<template>
  <q-page>
    <q-form style="max-width: 600px">
      <q-select class="q-ma-sm" outlined v-model="model" :options="options" id="rutina" label="Seleccione una rutina a consultar" >
        <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
      </q-select>
      <q-input class="q-ma-sm" outlined v-model="model" :options="options" id="dateform-control" type="date"
       />
      <div class="column q-mb-md items-center">
        <q-btn push color="primary" label="Consultar" type="Submit" @click="consultar()" />
      </div>
    </q-form>

    <div id="div_tabla" class="mb-4 mt-4 d-flex justify-content-center">
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  
  setup () {
    return {
      tag: ref('Seleccione'),
      model: ref(''),
      options: [
        'Facebook',
        'Google'
      ],
      date: ref('2019/02/01')
    }
  }
}
)

</script>

