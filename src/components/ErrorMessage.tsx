import type { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-50 text-red-600 p-4 text-sm font-medium text-center">
      {children}
    </p>
  );
}
