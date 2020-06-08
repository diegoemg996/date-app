<template>
  <div class>

    <div class="card" style="width: 25rem;">
      <img :src="usuarios[index].avatar" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{usuarios[index].first_name}} <small>{{usuarios[index].last_name}}</small></h5>
        <p>{{usuarios[index].email}}</p>
        

        <div class="d-flex justify-content-around mt-3">
        <i class="fas fa-heart-broken fa-3x corazon" @click="recorrerArreglo"></i>
        <i class="far fa-comment-dots fa-3x mensaje" @click="mostrarMensaje = !mostrarMensaje" :disabled="true"></i>
        <i class="fas fa-heart fa-3x corazon" @click="recorrerArreglo"></i>
        </div>
              
        <div class="input-group my-3"  v-if="mostrarMensaje" >
          <input type="text" class="form-control " placeholder="Envia un mensaje" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" id="button-addon2" 
            @click="mensajeEnviado">Enviar</button>
          </div>
        </div>

        <div class="d-flex justify-content-around my-3" v-if="enviado && coins>0">
          <p>¡Mensaje Enviado!</p>
        </div>

        <div class="d-flex justify-content-around my-3" v-if="noCoins">
          <p>Te has quedado sin monedas :(</p>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-around mt-3">
        <div >
          <i class="fas fa-coins fa-2x monedas d-inline mx-2"></i>
          <p class="d-inline">{{coins}}</p>
        </div>
        <button class="btn btn-success" @click="paginaMonedas()">Comprar mas monedas</button>
    </div>


  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  name: 'MostrarUsuarios',

  data(){
    return{
      index: 1,
      mostrarMensaje: false,
      enviado: false,
      noCoins: false
    
    }

  },
  created(){
    this.obtenerUsuarios()
    console.log(this.usuarios)
  },
   methods:{
    ...mapActions(['obtenerUsuarios']),
    ...mapMutations(['quitarMoneda']), 

    recorrerArreglo(){
      console.log(this.usuarios.length)
      if(this.index < this.usuarios.length-1){
        this.index ++ 
      }else{
        this.index = 0
      } 
    },
    mensajeEnviado(){

      if(this.coins > 0){
        this.mostrarMensaje = !this.mostrarMensaje
        this.enviado = !this.enviado
        setTimeout(()=>{
          this.enviado = !this.enviado
        }, 2000)
        this.quitarMoneda()

      }else{
        this.noCoins  = true
        setTimeout(()=>{
          this.enviado = !this.enviado
        }, 2000)

      }
    },

    paginaMonedas(){
      this.$router.push('/compras')
    }
  },computed:{
    ...mapState(['usuarios', 'coins'])
  }
}
</script>
<style >
.corazon{
  color: red;
}

.corazon:hover{
  color: #ff6961;
}

.mensaje{
  color: blueviolet;
}

.mensaje:hover{
  color: lightblue;
}

.monedas{
  color: goldenrod;
}
  
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
