import { ReactElement } from "react";

interface PhoneScreenProps {
  bgColor?: string;
  children: ReactElement;
}

const PhoneScreen = ({ bgColor = "bg-white", children }: PhoneScreenProps) => {
  return (
    <div
      className={`${bgColor} overflow-hidden flex flex-col m-auto w-[375px] h-[667px] rounded-4xl phone-screen-shadow`}
    >
      {children}
    </div>
  );
};

export default PhoneScreen;
