import { DataMerchItem } from '@/utils/interface';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface BundlingProps {
  item: DataMerchItem;
  onClick: Dispatch<SetStateAction<{ data: DataMerchItem; modal: boolean }>>;
}

function MerchBundlingCard({ item, onClick }: BundlingProps) {
  const { nama, harga, thumbnail } = item;
  return (
    <div
      onClick={() => onClick({ modal: true, data: item })}
      className={`p-5 bg-paper-merch h-[70vw] lg:h-[60vh] aspect-square md:aspect-[4/3] lg:aspect-video flex gap-5 bg-black-primary hover:brightness-75 ease-in-out transition-all duration-500 cursor-pointer flex-col-reverse md:flex-row`}>
      <div className="flex basis-1/5 font-bold flex-col justify-end">
        <h2 className="rosela text-xl md:text-2xl text-red-primary whitespace-nowrap">
          {nama}
        </h2>
        <p>{harga}</p>
      </div>
      <div className="relative basis-4/5 w-full h-full">
        <Image
          loader={() => thumbnail}
          src={thumbnail}
          alt={nama}
          fill
          className="object-cover md:object-fill"
        />
      </div>
    </div>
  );
}

export default MerchBundlingCard;
