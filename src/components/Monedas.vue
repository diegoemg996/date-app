<template>
<div>
    <div class="d-flex flex-nowrap mt-5">

        <div class="card text-center m-2" @click="seleccionPaquete('sencillo')" :class="{'seleccion':  seleccionSencillo }">
            <div class="card-body">
            <h5 class="card-title">Paquete sencillo</h5>
            <h3>3</h3>
            <i class="fas fa-coins fa-2x monedas d-inline mx-2"></i>
            
            </div>
        </div>

         <div class="card text-center m-2" @click="seleccionPaquete('superP')" :class="{'seleccion':  seleccionSuper }" >
            <div class="card-body">
            <h5 class="card-title">Super Paquete</h5>
            <h2>5</h2>
            <i class="fas fa-coins fa-2x monedas d-inline mx-2"></i>
            
            </div>
        </div>

         <div class="card text-center m-2" @click="seleccionPaquete('mega')" :class="{'seleccion':  seleccionMega }">
            <div class="card-body">
            <h5 class="card-title">Mega Paquete</h5>
            <h2>8</h2>
           <i class="fas fa-coins fa-2x monedas d-inline mx-2"></i>
            
            </div>
        </div>    
    </div>
    <div class="d-flex justify-content-around my-4">
    <button class="btn btn-primary" @click="comprar()" v-if="cantidad>0">Comprar</button>
    </div>
</div>
</template>

<script>

import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: 'Monedas',
    
    data(){
        return{
            eleccion: '',
            cantidad: 0,
            seleccionSencillo: false,
            seleccionSuper: false,
            seleccionMega: false
  
        }
    },

    methods:{
    ...mapMutations(['recargaMonedas']), 
    comprar(){
        this.$router.push('/')
        this.recargaMonedas(this.cantidad)
    },
    seleccionPaquete(eleccion){
        switch (eleccion){
            case 'sencillo':
                this.eleccion = 'sencillo'
                this.cantidad = 3
                this.seleccionSencillo = true
                this.seleccionSuper = false
                this.seleccionMega = false
                break;
            case 'superP':
                this.eleccion = 'super'
                this.cantidad = 5
                this.seleccionSencillo = false
                this.seleccionSuper = true
                this.seleccionMega = false
                break;
            case 'mega':
                this.eleccion = 'mega'
                this.cantidad = 8
                this.seleccionSencillo = false
                this.seleccionSuper = false
                this.seleccionMega = true
                break;
        } 
    },
 
}

}

</script>

<style>

.seleccion{
    background: #4682BF;
    color: #fff;
    border: 5px solid white;
}

</style>