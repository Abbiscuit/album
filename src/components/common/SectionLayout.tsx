import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  link?: string;
  linkLabel?: string;
};

export default function SectionLayout({
  children,
  title,
  link,
  linkLabel,
}: Props) {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {link && (
          <a className="text-emerald-400 text-sm font-semibold" href={link}>
            {linkLabel}
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
