import { logo } from "../data/data";

function Logo({ className }) {
  return (
    <>
      <img src={logo} alt="Logo" className={className} />
    </>
  );
}

export default Logo;
