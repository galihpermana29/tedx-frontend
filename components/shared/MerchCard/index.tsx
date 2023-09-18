import { DataMerchItem } from '@/utils/interface';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface MerchPropsI {
  item: DataMerchItem;
  key: number;
  onClick: Dispatch<SetStateAction<{ data: DataMerchItem; modal: boolean }>>;
}

export default function MerchCard({ item, key, onClick }: MerchPropsI) {
  const { nama: name, thumbnail: image, harga: price } = item;
  return (
    <div
      className="relative w-full"
      onClick={() => onClick({ modal: true, data: item })}>
      <div
        className="bg-paper-merch w-full h-full aspect-square p-[20px] flex flex-col gap-[10px] hover:brightness-75 transition-all duration-500 ease-in-out"
        key={key}>
        <div>
          <h1 className="creato lg:text-[24px] font-bold xs:text-[18px] ">
            {name}
          </h1>
        </div>
        <div className="relative aspect-square w-full">
          <Image
            loader={() => image}
            src={image}
            alt={`${name} Image`}
            className="w-full"
            fill
          />
        </div>
        <div>
          <h1 className="creato lg:text-[30px] font-[700] xs:text-[20px]">
            {price}
          </h1>
        </div>
      </div>
    </div>
  );
}
