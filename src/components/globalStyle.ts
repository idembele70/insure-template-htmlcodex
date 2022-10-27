import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  color: #696E77;
}
h1 {
  font-family: "Poppins", "sans-serif";
  line-height:1.2;
  font-weight:600;
  color: #15233C;
  font-size:2.5rem;
}
h2 {
font-family:"Roboto", sans-serif;
font-size:2rem;
font-weight:600;
line-height:1.5;
}
h5 {
  font-family: "Roboto", "sans-serif";
  font-weight:600;
  font-size:1.25rem;
}
p {
  font-family: "Roboto", "sans-serif";
  font-weight:400;
  line-height: 1.5;
}
`;
