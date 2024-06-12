import { type ReactNode, useEffect } from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

export const Button = ({ children, id }: Props) => {
  useEffect(() => {
    console.log(id);
  }, [id]);

  return <button>{children}</button>;
};
