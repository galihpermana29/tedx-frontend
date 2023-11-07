import { DataMerchItem } from '@/utils/interface';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface MerchPropsI extends HTMLAttributes<HTMLDivElement> {
  item: DataMerchItem;
  key: number;
}

export default function MerchCard({ item, key, ...props }: MerchPropsI) {
  const { nama: name, thumbnail: image, harga: price } = item;
  return (
    <div className="relative w-full" {...props}>
      <div
        className="bg-paper-merch w-full h-full min-h-[400px] aspect-[3/4] p-[20px] flex flex-col gap-[10px]"
        key={key}>
        <div>
          <h1 className="creato lg:text-[24px] font-bold xs:text-[18px] ">
            {name}
          </h1>
        </div>
        <div className="relative h-full w-full">
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
