import { Button, ButtonProps } from "@heroui/button";

const ButtonUI = ({
  children,
  color = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Button
        color={color}
        radius="none"
        className={`font-medium ${className}`}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonUI;
