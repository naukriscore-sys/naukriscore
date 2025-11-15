import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const CustomBtn = (props: any) => {
  const { label, link, Function, addClass, iconLeft, iconRight } = props;

  return (
    <Link
      className={`${addClass} rounded-4xl px-5 py-2`}
      href={link ? link : ""}
      onClick={Function ? Function : ""}
    >
      {" "}
      {label}{" "}
      {iconRight ? (
        <FontAwesomeIcon className="w-3 h-3" icon={iconRight} />
      ) : (
        ""
      )}{" "}
      {iconLeft ? (
        <FontAwesomeIcon className="w-3 h-3" icon={iconLeft} />
      ) : (
        ""
      )}{" "}
    </Link>
  );
};
