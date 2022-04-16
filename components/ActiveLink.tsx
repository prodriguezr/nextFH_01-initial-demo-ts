import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';

const style: CSSProperties = {
  color: '#0070F3',
  textDecoration: 'urderline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: Props) => {
  const { route } = useRouter();

  return (
    <Link href={href}>
      <a style={route === href ? style : undefined}>{text}</a>
    </Link>
  );
};
