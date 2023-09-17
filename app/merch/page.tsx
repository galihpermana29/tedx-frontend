'use client';

import WebsiteAPI from '@/api/website';
import MerchModal from '@/components/MerchModal';
import { LoadingPage } from '@/components/shared/Loading';
import MerchCard from '@/components/shared/MerchCard';
import MerchHero from '@/components/shared/MerchHero';
import MerchDivider from '@/images/merch-divider.png';
import { DataMerchItem } from '@/utils/interface';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Merch() {
  const [data, setData] = useState<DataMerchItem[]>();
  const [bundling, setBundling] = useState<DataMerchItem[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<{
    data: DataMerchItem | null;
    modal: boolean;
  }>({ data: null, modal: false });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await WebsiteAPI.getMerch();
        const containsBundling: DataMerchItem[] = [];
        const doesNotContainBundling: DataMerchItem[] = [];

        data.forEach((item) => {
          if (['Bundling'].some((word) => item.nama.includes(word))) {
            containsBundling.push(item);
          } else {
            doesNotContainBundling.push(item);
          }
        });
        setBundling(containsBundling);
        setData(doesNotContainBundling);
      } catch (error) {
        if (error) {
          const axiosError = error as AxiosError; // Cast error to AxiosError
          const responseData = axiosError.response?.data as
            | { errors: string[] }
            | undefined;
          const err = responseData
            ? responseData?.errors[0]
            : 'Ouch, an error happen!';
          toast.error(err, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else {
          // Handle non-Axios errors here
          console.error(error, bundling, 'err');
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-merch overflow-hidden">
      <ToastContainer />
      <MerchModal
        item={active.data}
        isClose={active.modal}
        setIsClose={() => setActive({ modal: false, data: null })}
      />
      <MerchHero />
      <div className="relative h-[10vh] w-full">
        <div className="absolute w-full aspect-video">
          <Image
            alt="Divider"
            src={MerchDivider}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="body bg-yellow-merch">
        {loading && <LoadingPage />}
        {!loading && (
          <div className="mx-auto max-w-screen-2xl px-[60px] py-[200px]">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[100px] justify-center">
              {data?.map((data, index) => (
                <div key={index} className=" flex justify-center">
                  <MerchCard item={data} key={index} onClick={setActive} />
                </div>
              ))}
            </div>
          </div>
        )}
        M me
      </div>
    </div>
  );
}
