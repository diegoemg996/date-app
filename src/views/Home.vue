<template>
  <div class="home my-5">
    
    <MostrarUsuarios />
  </div>
</template>

<script>
// @ is an alias to /src
import MostrarUsuarios from '@/components/MostrarUsuarios.vue'

export default {
  name: 'Home',
  components: {
    MostrarUsuarios
  }
}
</script>
