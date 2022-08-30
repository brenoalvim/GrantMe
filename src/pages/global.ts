import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  scroll-behavior: smooth;
}
   body{
    margin: 0;
    padding: 0;
    background-color: var(--dark-color); 
  }
  :root {
    --brand-color: #EE1739;
    --dark-color: #121212;
    --mid-color: #6D676E;
    --light-color: #F2F2F2;
  }

`
