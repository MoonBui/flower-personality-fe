interface HeaderProps {
  avatar?: string;
  name: string;
  lineColor: string;
}

// const COLOR_CHOICE = {
//   blush: "fde0d9",
//   ice: "ADD6FF",
//   sage: "9BBFA7",
// } as const;

const Header = ({ avatar, name, lineColor }: HeaderProps) => {
  return (
    <div
      className="flex gap-3 text-left items-center py-2 px-4 text-[#0A100D]"
      style={{ borderBottom: `2px solid ${lineColor}` }}
    >
      {avatar && (
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />
      )}
      <span className="font-semibold">{name}</span>
    </div>
  );
};

export default Header;
