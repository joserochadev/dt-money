import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: var(--gray200);

    /* GREEN */
    --green: #00875f;
    --green-dark: #015f43;
    --green-light: #00b37e;

    /* RED */
    --red: #f75a68;
    --red-dark: #aa2834;

    /* BASE */
    --gray100: #121214;
    --gray200: #202024;
    --gray300: #29292e;
    --gray400: #323238;
    --gray500: #7c7c8a;
    --gray600: #c4c4cc;
    --gray700: #e1e1e6;
    --white: #ffffff;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px (desktop) */

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;  // 16 * 93.75 = 15 px
    }

    @media (max-width: 720px){
      font-size: 87.5%;  // 16 * 87.5 = 14 px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }     

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }

  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
