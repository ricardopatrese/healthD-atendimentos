

<template>
  <h1>{{ msg }}</h1>

  <form id="form">
    <div class="mb-3">
      <label for="pessoa_fisica" class="form-label">Nome pessoa Física</label>
      <input type="text" class="form-control" name="pessoa" id="pessoa_fisica">
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Idade</label>
      <input type="number" class="form-control" name="idade" id="idade">
    </div>

    <label for="sexo">Sexo</label>
    <br>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo_masculino" value="option1">
      <label class="form-check-label" for="sexo_masculino">Masculino</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo_feminino" value="option2">
      <label class="form-check-label" for="sexo_feminino">Feminino</label>
    </div>
    <br><br>

    <div class="mb-3">
      <label for="pai" class="form-label">Nome do pai</label>
      <input type="text" class="form-control" name="pai" id="pai">
    </div>


    <div class="mb-3">
      <label for="mae" class="form-label">Nome da mãe</label>
      <input type="text" class="form-control" name="mae" id="mae">
    </div>

    <select class="form-select" aria-label="Default select example">
      <option selected>Profissão</option>
      <option value="1">tec. em informática</option>
      <option value="2">contador</option>
      <option value="3">Administrador</option>
      <option value="4">Eng. Eletricista</option>
      <option value="5">Nenhuma das alternativas</option>
    </select>
    <br>

    <button type="submit" class="btn btn-success">Enviar</button>
  </form>
  
</template>


<script setup>


  defineProps({
    msg: String
  })
  

  const forms = document.getElementById('form')

  forms.addEventListener('submit', check)

  function check() {
    console.log('nada')
  }


  
  </script>