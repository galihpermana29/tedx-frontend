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
              <Dialog.Panel className="lg:w-[80%] w-[90%] transform overflow-hidden rounded-2xl bg-flower h-full p-6 text-left align-middle shadow-xl transition-all">
                <div className="bg-white flex flex-col-reverse md:flex-row xs:h-[90%] h-screen lg:max-h-[500px] md:max-h-[400px] w-full justify-between items-center lg:gap-[30px]">
                  <div className="flex flex-col justify-between md:h-[400px] lg:h-[500px] flex-1 md:p-[36px] p-[10px]">
                    <div>
                      <h1 className="creato text-[24px] md:text-[30px] lg:text-[36px] font-[700] mb-[10px]">
                        {name}
                      </h1>
                      <p className="creato md:text-[18px] lg:text-[20px] mb-[10px]">
                        {desc}
                      </p>
                    </div>
                    <div>
                      <p className="creato text-[24px] lg:text-[32px] font-[700] mb-[10px]">
                        {price}
                      </p>
                      <div className="flex lg:gap-[20px] gap-[10px] flex-col-reverse md:flex-row">
                        <MotionButton
                          onClick={setIsClose}
                          as="button"
                          type="secondary"
                          className="w-max-w flex-1 !text-[15px]">
                          Batal
                        </MotionButton>
                        <MotionButton
                          href="/"
                          as="client-link"
                          type="primary"
                          className="w-full flex-2 !text-[15px]">
                          Dapatkan Sekarang
                        </MotionButton>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-square md:flex-1 lg:h-[500px] w-full max-w-[500px] md:p-[36px] p-[10px]">
                    <Image
                      loader={() => image}
                      src={image}
                      alt={`${name} Image`}
                      width={500}
                      height={500}
                      className="w-full h-full object-fit"
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
