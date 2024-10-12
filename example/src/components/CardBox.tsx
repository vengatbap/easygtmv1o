import { Card } from "flowbite-react";
import React, { useContext } from "react";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card ${className}`}>{children}</Card>
  );

};

export default CardBox;
