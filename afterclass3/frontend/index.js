fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(data => {
    const users = data.map((user) => {
      return `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
      </tr>
      `
    }).join('')

    usersBody.innerHTML = users
  })

const formUser = document.getElementById('formUser')
const buttonSubmit = document.getElementById('buttonSubmit')
const usersBody = document.getElementById('usersBody')

const nameInput = document.getElementById('exampleInputName')
const emailInput = document.getElementById('exampleInputEmail')
const usernameInput = document.getElementById('exampleInputUsername')

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    username: usernameInput.value
  }

  return fetch('http://localhost:8080/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
})

const socket = io('http://localhost:8080')

/* socket.on('users', data => {
  const users = data.map((user) => {
    return `
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
    </tr>
    `
  }).join('')

  usersBody.innerHTML = users
})*/

socket.on('newUser', data => {
  const user = `
  <tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.username}</td>
  </tr>
  `

  usersBody.innerHTML += user
})

