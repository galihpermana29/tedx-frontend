'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from '../Button';

export default function Modal({
  buttonClassName,
}: {
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        as="button"
        type="secondary"
        onClick={openModal}
        className={buttonClassName}>
        Syarat dan Ketentuan
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-flower h-full p-6 text-left align-middle shadow-xl transition-all">
                  <div className="aspect-[3/5] md:aspect-square rounded-xl  ">
                    <div className="w-full bg-white p-5 rounded-md overflow-y-scroll h-full">
                      <h1 className="font-bold mb-5 text-center text-xl">
                        Esai Brief
                      </h1>

                      <div>
                        <h2 className="font-bold">Dialektik</h2>
                        <p>
                          Dalam kompleksitas zaman ini, seorang insan dalam
                          menyuarakan pendapat yang terkubur harus melewati
                          proses dialektik. Dialektik sebagai perubahan dan
                          pertentangan antara dua kekuatan yang berlawanan.
                          Penerapan dialektik dalam hidup insan membantu kita
                          memahami bahwa pertentangan adalah bagian alami dari
                          eksistensi manusia.
                        </p>
                        <br />
                        <p>
                          Penting juga untuk menyadari bahwa dialektik tidak
                          selalu memberikan solusi yang jelas dan memuaskan
                          untuk setiap konflik yang terjadi antara insan.
                          Terkadang, konflik dapat menjadi rumit atau sulit
                          diatasi dan sintesis yang diharapkan mungkin tidak
                          tercapai. Dalam kasus-kasus ini, penting untuk
                          menerima keterbatasan dan kejujuran dalam menerima
                          insan lain dengan apa adanya mereka tanpa menaruh
                          ekspektasi tertentu. Di saat konflik, mendengarkan
                          sudut pandang yang beragam, berkomunikasi secara
                          efektif, dan berusaha memahami perspektif insan lain
                          adalah kunci untuk mencapai solusi yang konstruktif.
                        </p>
                      </div>
                      <br />
                      <div>
                        <h2 className="font-bold">Panduan Menulis</h2>
                        <ol className="list-decimal list-inside">
                          <li>
                            Esai ditulis dengan maksimal 750 kata dan minimal
                            500 kata tidak termasuk judul. Penulisan font TNR
                            size 12 spasi 1.5.
                          </li>
                          <li>
                            Dalam esai anda tidak diperlukan untuk
                            mendefinisikan ulang apa itu dialektik secara umum.
                          </li>
                          <li>
                            Ceritakan ide anda dan bebas menggunakan teori
                            apapun selama itu relevan dalam pembahasan anda jika
                            merasa diperlukan (penambahan teori bersifat
                            opsional).
                          </li>
                        </ol>
                      </div>
                      <br />
                      <div>
                        <h2 className="font-bold">
                          Requirement Student Speaker
                        </h2>
                        <ul className="list-disc list-inside">
                          <li>
                            Pendaftar merupakan mahasiswa aktif Universitas
                            Brawijaya, tanpa memandang gender, disabilitas, ras,
                            etnis, atau karakteristik lainnya
                          </li>
                          <li>
                            Pendaftar bebas untuk bereksplorasi dengan ketentuan
                            format yang ada
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10">
                        <Button
                          as="button"
                          type="primary"
                          onClick={closeModal}
                          className="w-full py-1">
                          Tutup
                        </Button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
