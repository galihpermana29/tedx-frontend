import { ReactNode } from 'react';

function FAQCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative p-5 rounded-xl shrink-0 w-full lg:w-[400px] bg-flower aspect-square">
      <div className="bg-white overflow-y-scroll h-full rounded-md p-5">
        <h1 className="font-bold text-lg mb-5">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default FAQCard;
