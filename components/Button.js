import Link from "next/link";

const Button = ({ text, style, link }) => {
  return (
    <Link href={link ? link : ""}>
      <button className={`h-[45px] px-4 font-medium text-sm ${style}`}>{text}</button>
    </Link>
  );
}

export default Button;