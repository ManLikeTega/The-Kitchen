import MotionElement from "./MotionElement";

const Badge = ({ children, className, Icon }) => {
  return (
    <>
      <MotionElement
        className={`btns inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm transition  hover:shadow-lg ${className}`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </MotionElement>
    </>
  );
};

export default Badge;
