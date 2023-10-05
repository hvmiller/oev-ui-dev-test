import styled from "styled-components";
import { Spacing } from "../../utils/spacing";
import { Colour } from "../../utils/colours";

export const Button = styled.a`
  border-radius: 6px;
  font-family: Gotham, helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.5;
  padding: ${Spacing.size3} ${Spacing.size4};
  text-align: center;
  text-decoration: none;
  transition: all 60ms ease-in 0s;
  width: max-content;
  background-color: ${Colour.primary};
  border: 2px solid ${Colour.primary};
  color: ${Colour.background2};

  @media (min-width: 600px) {
    border-radius: ${Spacing.size3};
    font-size: 18px;
    padding: ${Spacing.size4} ${Spacing.size5};
  }

  &:hover {
    background-color: ${Colour.primaryhover};
    border: 2px solid ${Colour.primaryhover};
    color: ${Colour.white};
  }
`;
