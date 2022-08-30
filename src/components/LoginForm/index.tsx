import { useEffect } from 'react'

import { Div } from './style'

import GlobalStyle from '../../pages/global'

export default function Input() {
  function searchUser() {
    const email: HTMLInputElement = document.querySelector('#email')

    const password: HTMLInputElement = document.querySelector('#password')
  }

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.defaultPrevented) {
        return
      }

      if (event.code == 'Enter') {
        searchUser()
      }
    })
  }, [])

  return (
    <Div>
      <GlobalStyle />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login</h3>
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Email" id="email" autoComplete="off" />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          id="password"
          autoComplete="off"
        />
        <button onClick={searchUser}>Entrar</button>
      </form>
    </Div>
  )
}
