'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

type DataT = {
  name: string;
  price: string;
  dateOrder: string;
  venue?: string;
  dateEvent: string;
  theme: string;
  capacity: string;
  statusActive: boolean;
  statusSold: boolean;
  route: string;
};

interface TicketCardI {
  data: DataT;
}

export default function TicketCard({ data }: TicketCardI) {
  const router = useRouter();
  return (
    <div className="relative p-3 rounded-xl w-full lg:w-[60%] bg-flower">
      <div className="bg-white overflow-y-scroll h-full rounded-md p-5">
        <div className="flex justify-between flex-col text-start">
          <h1 className="creat font-[700] md:text-[24px] text-[20px]">
            {data.name}
          </h1>
          <h1 className="creato font-[700] md:text-[24px] text-[20px] text-orange-primary">
            {data.price}
          </h1>
        </div>
        <div className="text-start mt-[20px] ">
          <div className="flex gap-[10px] md:text-[20px] text-[17px]">
            <div className="min-w-[135px] md:min-w-[200px] ">Kuota Tiket:</div>
            <div className="">: {data.capacity}</div>
          </div>
          <div className="flex gap-[10px] md:text-[20px] text-[17px]">
            <div className="min-w-[135px] md:min-w-[200px] ">
              Tanggal Pemesanan
            </div>
            <div className="">: {data.dateOrder}</div>
          </div>
          <div className="flex gap-[10px] md:text-[20px] text-[17px]">
            <div className="min-w-[135px] md:min-w-[200px] ">Tema</div>
            <div>: {data.theme}</div>
          </div>
          {data.venue !== '' && (
            <div className="flex gap-[10px] md:text-[20px] text-[17px]">
              <div className="min-w-[135px] md:min-w-[200px] ">Venue</div>
              <div>: {data.venue}</div>
            </div>
          )}
          <div className="flex gap-[10px] md:text-[20px] text-[17px]">
            <div className="min-w-[135px] md:min-w-[200px] ">Tanggal Event</div>
            <div>: {data.dateEvent}</div>
          </div>
        </div>
        <div className="flex md:gap-[30px] mt-[20px] flex-col md:flex-row gap-[10px]">
          <Button
            onClick={() => {
              if (data.statusActive && !data.statusSold)
                router.push(data.route);
            }}
            htmlType="button"
            className="bg-transparent border-2 border-orange-primary h-max text-orange-primary text-center text-[20px] text-[17px] w-full rounded-[6px] p-[10px] ">
            Lihat Detail Event
          </Button>
          <Button
            disabled={data.statusSold || !data.statusActive}
            onClick={() => {
              if (data.statusSold) return;
              router.push('/ticket-main-event');
            }}
            htmlType="button"
            className="bg-orange-primary h-max text-white text-center text-[20px] text-[17px] w-full rounded-[6px] p-[10px] ">
            Pilih Tiket
          </Button>
        </div>
      </div>
    </div>
  );
}
