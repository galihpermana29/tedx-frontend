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
      onClick={() =>
        onClick({ modal: true, data: { ...item, thumbnail: item.detail[0] } })
      }
      className={`p-5 bg-paper-merch h-[70vw] lg:h-[60vh] aspect-square md:aspect-video flex gap-5 bg-black-primary hover:brightness-75 ease-in-out transition-all duration-500 cursor-pointer flex-col-reverse md:flex-row`}>
      <div className="flex basis-1/5 font-bold flex-col justify-end">
        <h2 className="rosela text-xl md:text-[32px] text-red-primary whitespace-nowrap md:mb-[10px]">
          {nama}
        </h2>
        <p className="creato text-xl md:text-[32px]">{harga}</p>
      </div>
      <div className="relative basis-4/5 w-full h-full">
        <Image
          loader={() => thumbnail}
          src={thumbnail}
          alt={nama}
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
}

export default MerchBundlingCard;
