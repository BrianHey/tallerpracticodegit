<template>
  <div>
    <h1>modelos de motos</h1>
 
    <div v-for="(model,i) of getModelo" :key="i">
        <ul>
            <li>Modelo de moto: {{model.id}}</li>
        </ul>

    </div>

  </div>

  
</template>

<script>
import  { mapState } from "vuex";
export default{
    ...mapState(["getModelo"]),

}
</script>

<style></style>
