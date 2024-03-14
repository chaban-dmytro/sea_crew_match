import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    font-style: normal;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.h5};
    line-height: 1.5;
    letter-spacing: .06em;
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.p2};
    background-color: ${({ theme }) => theme.colors.primary};
    line-height: 1.5;
    letter-spacing: .06em;
    border: transparent;
    border-radius: 8px;
    letter-spacing: 6%;
    cursor: pointer;
    
  }

  select,
  input {
    color: ${({ theme }) => theme.colors.grey_text};
    padding: 12px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
    border-radius: 8px;
    line-height: 1.5;
    letter-spacing: 0.06em;

     &::placeholder {
      line-height: 1.5;
      letter-spacing: 0.06em;
     }
  }

  a {
    color: ${({ theme }) => theme.colors.grey_text};
    font-weight: 400;
  }
`;
