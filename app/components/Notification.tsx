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
    <button
      className="notification"
      onClick={onClick}
      style={{
        backgroundColor: "#fde0d9",
        border: "0.5px solid #FAC1B3",
        boxShadow: "0px 1px 3px #FAC1B3",
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
