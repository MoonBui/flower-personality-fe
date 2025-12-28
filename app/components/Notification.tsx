interface NotificationProps {
  avatar: string;
  title: string;
  message: string;
}

const Notification = ({ avatar, title, message }: NotificationProps) => {
  return (
    <div className="notification">
      <img
        src={avatar}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-sm ">{message}</span>
      </div>
    </div>
  );
};

export default Notification;
