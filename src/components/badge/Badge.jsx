import "./badgeStyle.css";

const Badge = ({ children, count }) => {
  return (
    <div className="badge-mainWrapper">
      {count > 0 && <div className="badge-count">{count}</div>}
      {children}
    </div>
  );
};

export default Badge;
