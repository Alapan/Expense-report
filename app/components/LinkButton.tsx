import Link from 'next/link';

interface ButtonProps {
  linkTo: string;
  buttonText: string;
  backgroundColor: string;
  backgroundColorOnHover: string;
  otherCustomClasses?: string;
}

const LinkButton = ({
  linkTo,
  buttonText,
  backgroundColor,
  backgroundColorOnHover,
  otherCustomClasses = '',
}: ButtonProps) => {
  return (
    <Link href={linkTo} className={`inline-block w-full ${otherCustomClasses} lg:ms-6 text-center text-white ${backgroundColor} ${backgroundColorOnHover} hover:underline rounded-lg p-3.5`}>{buttonText}</Link>
  );
}

export default LinkButton;
