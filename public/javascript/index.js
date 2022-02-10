const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(res =>
      //console.log(res.data.forEach))
      {
        let text = ''
        res.data.forEach(eachCharacter => text +=
          ` <div class="character-info">
      <div class="id">${eachCharacter.id}</div>
      <div class="name">${eachCharacter.name}</div>
      <div class="occupation">${eachCharacter.occupation}</div>
      <div class="cartoon">${eachCharacter.class}</div>
      <div class="weapon">${eachCharacter.weapon}</div>
    </div>`)
        document.querySelector('.characters-container').innerHTML = text
      });


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI
      .getOneRegister(document.querySelector('.selectId').value)
      .then(res => {
        let text = ''
        //console.log(res)
        text =
          ` <div class="character-info">
      <div class="id">${res.data.id}</div>
      <div class="name">${res.data.name}</div>
      <div class="occupation">${res.data.occupation}</div>
      <div class="cartoon">${res.data.class}</div>
      <div class="weapon">${res.data.weapon}</div>
    </div>`
        document.querySelector('.characters-container').innerHTML = text
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
charactersAPI
.deleteOneRegister(document.querySelector('.selectId').value)
.then()
  .catch(err => console.log(err))
  console.log("borrado")
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const input = document.querySelector("#edit-character-form input")
const inputId=input[0].value
    const characterData={
name:input[1].value,
occupation:input[2].value,
weapon:input[3].value,
cartoon:input[4].checked,
}
charactersAPI
.updateOneRegister(characterData,inputId)
.then(()=>{
document.querySelector(`.cambio`).style.backgroundColor="green"
})
.catch((err)=>{
  document.querySelector(`.cambio`).style.backgroundColor="red"
  console.log(err)
})

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const input = document.querySelectorAll('#new-character-form input')
    const characterData = {
      name: input[0].value,
      occupation: input[1].value,
      weapon: input[2].value,
      cartoon: input[3].checked,

    }
    //console.log(characterData)
    charactersAPI

      .createOneRegister(characterData)
      .then(response => {
        document.querySelector('#new-character-form').reset()

      })
      .catch(err => console.log(err))
  });
});
