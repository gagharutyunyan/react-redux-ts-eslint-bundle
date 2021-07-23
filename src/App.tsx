import { FC } from 'react';

type props = { title: string };

export const App: FC<props> = ({ title }) => {
  return <>{title}</>;
};
