import { ReactNode } from "react";
import * as Styled from "./styles";

export interface LinkButtonProps {
  href: string;
  secondary?: boolean;
  children: ReactNode;
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  href,
  secondary,
  children,
}) => <Styled.Button href={href}>{children}</Styled.Button>;

export default LinkButton;
