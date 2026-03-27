import type { ReactNode } from "react";

export const Section = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section id={id}>
      <div className={className}>{children}</div>
    </section>
  );
};
