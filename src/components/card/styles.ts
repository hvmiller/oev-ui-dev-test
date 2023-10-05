import styled from "styled-components";
import { Heading1, Parapgraph } from "../typography/styles";
import { Spacing } from "../../utils/spacing";

export const Card = styled.div<{ $selected: boolean; $canHover: boolean }>`
  border-radius: ${Spacing.size4};
  color: #fff;
  overflow: hidden;
  transition: background-color 0.2s ease;
  background: ${(props) => (props.$selected ? "#200063" : "#180048")};
  cursor: ${(props) => (props.$canHover ? "pointer" : "inherit")};

  &:hover {
    background: ${(props) => (props.$canHover ? "#2d008c" : "#180048")};
  }
`;

export const ImgWrapper = styled.div`
  background: #e5e5e5;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: ${Spacing.size5} ${Spacing.size4};

  @media (min-width: 960px) {
    padding: ${Spacing.size5};
  }
`;

export const Heading = styled(Heading1)`
  text-align: center;
`;

export const Description = styled(Parapgraph)`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.size4} 0;
`;
