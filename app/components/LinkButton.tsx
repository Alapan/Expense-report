import Link from 'next/link';

interface ButtonProps {
  linkTo: string;
  buttonText: string;
  backgroundClass: string;
  backgroundClassOnHover: string;
}

const LinkButton = ({
  linkTo,
  buttonText,
  backgroundClass,
  backgroundClassOnHover
}: ButtonProps) => {
  return (
    <Link href={linkTo} className={`inline-block w-full my-2 lg:w-2/5 lg:ms-6 text-center text-white ${backgroundClass} ${backgroundClassOnHover} hover:underline rounded-lg p-3.5`}>{buttonText}</Link>
  );
}

export default LinkButton;
