import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background: var(--background);
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  :root {
    --THEME_COLOR_001: #1991EB;
    --THEME_COLOR_002: #E3E3E3;
    --THEME_COLOR_003: #F8F8F8;
    --THEME_COLOR_004: #8D8D8D;
    --THEME_COLOR_005: #252B33;
    --THEME_COLOR_006: #171B1F;
    --THEME_COLOR_007: #00FFFF;

    --background: var(--THEME_COLOR_006);

    --primary-color: var(--THEME_COLOR_001);
    --title: var(--THEME_COLOR_002);
    --subtitle: var(--THEME_COLOR_004);
    --button: var(--THEME_COLOR_003);
    --footer: var(--THEME_COLOR_005);
    --border-neon: var(--THEME_COLOR_007);
  }`;
