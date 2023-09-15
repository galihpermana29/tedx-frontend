import parse from 'html-react-parser';
import { FAQContent } from '@/utils/interface';

function FAQCard({ question, answer }: FAQContent) {
  return (
    <div className="relative p-5 rounded-xl shrink-0 w-full lg:w-[400px] bg-flower aspect-square">
      <div className="bg-white overflow-y-scroll h-full rounded-md p-5">
        <h1 className="font-bold text-lg mb-5">{question}</h1>
        {parse(answer)}
      </div>
    </div>
  );
}

export default FAQCard;
