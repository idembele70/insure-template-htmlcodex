import { css, CSSObject } from "styled-components";

export const MediumDesktop = (props: CSSObject) => css`
  @media only screen and (max-width: 1400px) {
    ${props}
  }
`;
export const SmallDesktop = (props: CSSObject) => css`
  @media only screen and (max-width: 1200px) {
    ${props}
  }
`;

export const Tablet = (props: CSSObject) => css`
  @media only screen and (max-width: 992px) {
    ${props}
  }
`;
export const Small = (props: CSSObject) => css`
  @media only screen and (max-width: 768px) {
    ${props}
  }
`;
export const XSmall = (props: CSSObject) => css`
  @media only screen and (max-width: 568px) {
    ${props}
  }
`;
