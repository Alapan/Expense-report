import Link from 'next/link';

interface ButtonProps {
  linkTo: string;
  buttonText: string;
  backgroundColor: string;
  backgroundColorOnHover: string;
}

const LinkButton = ({
  linkTo,
  buttonText,
  backgroundColor,
  backgroundColorOnHover
}: ButtonProps) => {
  return (
    <Link href={linkTo} className={`inline-block w-full my-2 lg:w-2/5 lg:ms-6 text-center text-white ${backgroundColor} ${backgroundColorOnHover} hover:underline rounded-lg p-3.5`}>{buttonText}</Link>
  );
}

export default LinkButton;
