<template>  
<header>         
     <span class="title">Doctor Pet´s</span>
     <router-link class="btn-header" to="/"> Home</router-link>
     <router-link class="btn-header" to="/vacunas">Vacunas</router-link>
     <router-link class="btn-header" to="/peluqueria">Peluqueria</router-link>
</header>
</template>
<style lang="scss" scoped>
  header {
    box-sizing: border-box;
    background-color: #607d8b;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  
    padding: 1rem;

    .title {
      align-self: center;
      color: #eceff1;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 1rem;
    }
  }

  .btn-header {
    width: 100px;
    text-align: center;
    background-color: #455A64;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: #B0BEC5;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem
  }

</style>