import { ColorTheme } from "../customHook/useThemeUIManager";

interface NotificationProps {
  avatar: string;
  title: string;
  message: string;
  colorTheme: ColorTheme;
  onClick: () => void;
}

const Notification = ({
  avatar,
  title,
  message,
  colorTheme,
  onClick
}: NotificationProps) => {
  return (
    <button
      className="notification"
      onClick={onClick}
      style={{
        backgroundColor: `${colorTheme.light}`,
        border: `0.5px solid ${colorTheme.dark}`,
        boxShadow: `0px 1px 3px ${colorTheme.dark}`,
      }}
    >
      <img
        src={avatar}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col text-black">
        <span className="font-semibold">{title}</span>
        <span className="text-sm ">{message}</span>
      </div>
    </button>
  );
};

export default Notification;
