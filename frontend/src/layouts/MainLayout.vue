<template>
<q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <img src="https://mosaico.arus.com.co:3000/acuacar_reportes/5defc3489d3335d45d3e6f0e/images/icons/ArusLogo.svg" alt="logo-arus" style="width: 110px;height: auto;">
          <q-toolbar-title>Rurinas de operacion</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>
            </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://mosaico.arus.com.co/assets/img/mosaico-icon-login.png">
            </q-avatar>
            <div class="text-weight-bold">Mauricio Salazar Saldarriaga</div>
            <div>mauricio.salazar@arus.com</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'




export default {
   setup () {
    
    const drawer = ref(false)
    return {
     
      drawer
     
      }
    }
  }

</script>
