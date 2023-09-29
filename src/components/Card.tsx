import * as Styled from "../styles/Card";

export interface CardProps {
    image: string;
    heading: string;
    description?: React.ReactNode;
    button: {
        href: string;
        label: string;
    };
    isSelected: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
    image,
    heading,
    description,
    button,
    isSelected,
}) => (
    <Styled.Container>
        <div>
            <img src={image} />
        </div>

        <div>{heading}</div>

        <div>{description}</div>

        <Styled.Button>{button.label}</Styled.Button>
    </Styled.Container>
);
