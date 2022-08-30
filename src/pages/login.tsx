import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import LoginForm from '../components/LoginForm'

import GlobalStyle from './global'

export default function Login() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="Login" />
      <GlobalStyle />
      <LoginForm />
    </>
  )
}
