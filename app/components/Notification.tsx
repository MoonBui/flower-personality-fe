interface NotificationProps {
  avatar: string;
  title: string;
  message: string;
  onClick: () => void;
}

const Notification = ({
  avatar,
  title,
  message,
  onClick,
}: NotificationProps) => {
  return (
    <button className="notification" onClick={onClick}>
      <img
        src={avatar}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-sm ">{message}</span>
      </div>
    </button>
  );
};

export default Notification;
