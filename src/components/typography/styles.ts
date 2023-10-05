import styled from "styled-components";
import { Spacing } from "../../utils/spacing";

export const Heading1 = styled.h3`
  font-family: Gotham, helvetica, arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: ${Spacing.size3};

  @media (min-width: 960px) {
    font-size: 23px;
    line-height: 35px;
    margin-bottom: ${Spacing.size4};
  }
`;

export const Parapgraph = styled.p`
  font-family: Gotham, helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  margin: 0;
  margin-bottom: ${Spacing.size3};

  @media (min-width: 960px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${Spacing.size4};
  }
`;
