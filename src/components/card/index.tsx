import * as Styled from "./styles";
import Button from "../linkButton";

export interface CardProps {
  image?: string;
  heading: string;
  description?: React.ReactNode;
  button?: {
    href: string;
    label: string;
  };
  isSelected?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
  image,
  heading,
  description,
  button,
  isSelected = false,
}) => {
  const isHoverable = button ? false : true;

  return (
    <Styled.Card $selected={isSelected} $canHover={isHoverable}>
      {image && (
        <Styled.ImgWrapper>
          <Styled.Image src={image} />
        </Styled.ImgWrapper>
      )}

      <Styled.ContentWrapper>
        <Styled.Heading>{heading}</Styled.Heading>

        {description && <Styled.Description>{description}</Styled.Description>}

        {button && (
          <Styled.ButtonWrapper>
            {" "}
            <Button href={button.href}>{button.label}</Button>
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentWrapper>
    </Styled.Card>
  );
};
