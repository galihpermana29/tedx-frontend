import Image from 'next/image';

import TicketCard from '@/components/TicketCard';
import { data } from '@/utils/data/ticket';

export default function Ticket() {
  return (
    <div className="bg-ticket py-20 overflow-hidden min-h-screen relative">
      <div className="absolute left-0 right-0">
        <Image
          className="w-full"
          src={'/assets/images/ticket-star.png'}
          alt="Root"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[15%] text-center w-full">
        <h1 className="md:text-[96px] xs:text-[50px] text-orange-primary rosela flex-1">
          Pilih Tiket Kamu
        </h1>

        <div className="w-full flex justify-center flex-col gap-[40px] mt-[70px] items-center xs:px-[30px]">
          {data.map((d, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <TicketCard data={d} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
