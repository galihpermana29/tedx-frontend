import { Dialog, Transition } from '@headlessui/react';
import Button from '@/components/shared/Button';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DataMerchItem } from '@/utils/interface';

interface MerchModalPropsI {
  item: DataMerchItem;
  isClose: boolean;
  setIsClose: Dispatch<SetStateAction<boolean>>;
}

export default function MerchModal({
  item,
  isClose,
  setIsClose,
}: MerchModalPropsI) {
  const {
    nama: name,
    thumbnail: image,
    harga: price,
    deskripsi: desc,
  } = item ?? {};
  const MotionButton = motion(Button);
  return (
    <Transition appear show={isClose} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={setIsClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-black-primary bg-opacity-90">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="lg:w-[70%] w-[90%] transform overflow-hidden rounded-2xl bg-flower h-full p-6 text-left align-middle shadow-xl transition-all">
                <div className="bg-white flex flex-col-reverse lg:flex-row h-screen max-h-[700px] w-full justify-between items-center p-[20px] lg:p-[40px] gap-[30px]">
                  <div className="flex flex-col justify-between h-full flex-1 lg:py-[20px]">
                    <div>
                      <h1 className="creato text-[26px] lg:text-[36px] font-[700] mb-[10px]">
                        {name}
                      </h1>
                      <p className="creato text-[15px] lg:text-[20px] mb-[10px]">
                        {desc}
                      </p>
                    </div>
                    <div>
                      <p className="creato text-[24px] lg:text-[32px] font-[700] mb-[10px]">
                        {price}
                      </p>
                      <div className="flex lg:gap-[20px] gap-[10px] flex-col-reverse lg:flex-row">
                        <MotionButton
                          onClick={setIsClose}
                          as="button"
                          type="secondary"
                          className="w-full flex-1">
                          Batal
                        </MotionButton>
                        <MotionButton
                          href="/"
                          as="client-link"
                          type="primary"
                          className="w-full flex-1">
                          Dapatkan Sekarang
                        </MotionButton>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full aspect-square">
                    <Image
                      loader={() => image}
                      src={image}
                      alt={`${name} Image`}
                      width={360}
                      height={200}
                      className="w-full"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
