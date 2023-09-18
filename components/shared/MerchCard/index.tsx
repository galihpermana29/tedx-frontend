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
      className="relative"
      onClick={() => onClick({ modal: true, data: item })}>
      <div className="w-full h-full max-w-[360px] max-h-[450px] bg-black absolute top-0 bg-black-primary hover:opacity-30 opacity-0 ease-in-out transition-all duration-500 cursor-pointer">
        .
      </div>
      <div
        className="bg-paper-merch w-full border-2 border-red-500 max-w-[360px] h-full max-h-[450px] p-[20px] flex flex-col gap-[10px] aspect-square"
        key={key}>
        <div>
          <h1 className="creato lg:text-[24px] font-[700] xs:text-[18px] ">
            {name}
          </h1>
        </div>
        <div className=" aspect-square w-full">
          <Image
            loader={() => image}
            src={image}
            alt={`${name} Image`}
            width={360}
            height={200}
            className="w-full"
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
