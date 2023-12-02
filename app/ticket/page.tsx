'use client';

import Image from 'next/image';

import TicketCard from '@/components/TicketCard';
import { data } from '@/utils/data/ticket';
import { useEffect, useState } from 'react';
import WebsiteAPI from '@/api/website';
import { Spin } from 'antd';

export default function Ticket() {
  const [loading, setLoading] = useState<boolean>(false);
  const [earlyBird, setEarlyBird] = useState<number>(0);
  const getCapacity = async () => {
    try {
      setLoading(true);
      const data = await WebsiteAPI.getCounter('normal-sale');
      setEarlyBird(data.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCapacity();
  }, []);
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
        <h1 className="md:text-[96px] text-[40px] text-orange-primary rosela flex-1">
          Pilih Tiket Kamu
        </h1>

        <div className="w-full flex justify-center flex-col gap-[40px] mt-[70px] items-center px-[15px]">
          {loading && <Spin />}
          {!loading &&
            data(earlyBird).map((d, idx) => (
              <div key={idx} className="w-full flex justify-center">
                <TicketCard data={d} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
