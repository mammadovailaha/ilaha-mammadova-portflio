import type { FC } from "react";
import { Link } from "react-router-dom";
interface Props{
  className:string;
}
const Logo:FC<Props> = ({className}) => {
  return (
 <Link to={"/"}>
    <div className={ `flex px-3.5 py-0.5 items-center gap-2 rounded-4xl ${className}`}>
      <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-main)] font-[lufga] text-base leading-4 text-white lg:text-lg lg:leading-5">
        IM
      </div>
      <div className="flex flex-col justify-center items-start">
        <h2 className="font-[lufga] text-base font-semibold tracking-tight text-[var(--text)]">İlaha Mammadova</h2>
        <p className="font-[lufga] text-[11px] tracking-wide text-[var(--muted)]">Software Engineer</p>
      </div>
    </div>
 </Link>
  );
};

export default Logo;
