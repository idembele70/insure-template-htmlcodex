import { css, CSSObject } from "styled-components";

export const Tablet = (props: CSSObject) => css`
  @media only screen and (max-width: 992px) {
    ${props}
  }
`;
