<template>
  <TheHeader v-if="showHeader"></TheHeader>
  <div v-if="showNames">
    Nome: {{ name }}
    <br>
    Sobrenome: {{ lastname }}
  </div><br>
  nivel: 
  <div v-if="nivel === 'admin'">Admin</div>
  <div v-else-if="nivel === 'gerente'">Gerente</div>
  <div v-else >Usuário</div>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TheHeader
  },
  data() { //variaveis do componente
    return{
      showHeader: true,
      name: 'Luccas',
      lastname: 'Drapala',
      showNames: false,
      nivel: 'erro'
    }
  }
}
</script>
