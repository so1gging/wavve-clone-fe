import { css, Global } from '@emotion/react'

const resetcss = css`
  body {
    background-color: #1b1b1b;
  }

  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
  body,
  button,
  input,
  select,
  table,
  textarea {
    font-size: 16px;
    line-height: 24px;
    color: #a5a5a5;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
  }
  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }
  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }
  button {
    background-color: transparent;
  }
  fieldset,
  img {
    border: 0;
  }
  img {
    vertical-align: top;
  }
  ol,
  ul {
    list-style: none;
  }
  address,
  em {
    font-style: normal;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  iframe {
    overflow: hidden;
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: top;
  }
  mark {
    background-color: transparent;
  }
  i {
    font-style: normal;
  }
`

export default function GlobalStyle() {
  return <Global styles={resetcss} />
}
