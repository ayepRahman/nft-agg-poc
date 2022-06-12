import { Token } from "apollo/generated/queries";

export interface TokenCardProps {
  token: Token;
  isSelected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}
