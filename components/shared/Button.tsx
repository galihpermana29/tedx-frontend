import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: 'primary' | 'secondary';
} & (
  | {
      as: 'button';
      onClick: () => void;
    }
  | {
      as: 'client-link';
      href: string;
    }
);

type ButtonStyle = {
  primary: string;
  secondary: string;
};

const baseButtonStyle: ButtonStyle = {
  primary:
    'border text-center bg-orange-primary border-orange-primary text-white px-5 py-4 rounded-lg font-bold text-lg hover:bg-orange-darker',
  secondary:
    'border text-center border-orange-primary text-orange-primary px-5 py-4 rounded-lg font-bold text-lg hover:bg-grey-light',
};

function Button({ children, className, type, ...props }: ButtonProps) {
  switch (props.as) {
    case 'button':
      return (
        <button
          className={`${className} ${baseButtonStyle[type]}`}
          onClick={props.onClick}>
          {children}
        </button>
      );
    case 'client-link':
      return (
        <Link
          className={`${className} ${baseButtonStyle[type]}`}
          href={props.href}>
          {children}
        </Link>
      );
  }
}

export default Button;
