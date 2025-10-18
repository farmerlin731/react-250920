// 方式二：React.FC（注意 children 已內建，但不易自訂 defaultProps）
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type: "button";
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button {...rest}>{children}</button>
);

export default Button;
