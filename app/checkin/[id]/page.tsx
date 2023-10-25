'use client';

import WebsiteAPI from '@/api/website';
import { AxiosError } from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';

import { Button } from 'antd';
interface DataI {
  email: string;
  nomor_telepon: string;
  nomor_identitas: string;
  jumlah_tiket: number;
  total_harga: number;
  tanggal: string;
  nama: string;
  checkin_nomor_tiket: null | string[];
  nomor_tiket: string[];
}

export default function CheckInDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get('nomor_tiket');
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataI | null>(null);

  const isAdmin =
    typeof window !== 'undefined' && localStorage.getItem('admin');

  const handleCheckIn = async () => {
    try {
      setLoading(true);
      await WebsiteAPI.checkInTiket(Number(id), `?ticket_number=${search}`);
      message.success('Checkin has succeed');
      getDetailTransaction();
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
        console.error(error, 'err');
      }
    } finally {
      setLoading(false);
    }
  };

  const getDetailTransaction = async () => {
    try {
      const { data } = await WebsiteAPI.getDetailTransaction(
        Number(id),
        `?nomor_tiket=${search}`
      );
      setData(data);
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
        console.error(error, 'err');
      }
    }
  };

  useEffect(() => {
    getDetailTransaction();
  }, []);
  return (
    <div>
      <ToastContainer />
      <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower  max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 min-h-screen">
            {!data && (
              <div className="creato xs:text-[20px] lg:text-[24px] font-[700] flex justify-center items-center h-screen">
                Data is not found
              </div>
            )}
            {data && (
              <div className="flex flex-col gap-[20px] ">
                <div>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    Semayam Asa TEDxUniversitas Brawijaya 2023
                  </h1>
                  <p className="creato text-[18px] font-[400]">
                    {data.tanggal} | Nyore Cafe
                  </p>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">Nomor Tiket</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {search}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">
                    Checkin Status
                  </p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.checkin_nomor_tiket === null && 'Belum Check In'}
                    {data.checkin_nomor_tiket &&
                    data.checkin_nomor_tiket.includes(search)
                      ? 'Telah Check In'
                      : 'Belum Check In'}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">Nama</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.nama}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">Email</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.email}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">No. Telepon</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.nomor_telepon}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">No. Identitas</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.nomor_identitas}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">Jumlah Tiket</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    {data.jumlah_tiket}
                  </h1>
                </div>
                <div>
                  <p className="creato text-[18px] font-[400]">Total Harga</p>
                  <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                    IDR {data.total_harga}
                  </h1>
                </div>
              </div>
            )}

            {isAdmin && data && (
              <Button
                disabled={
                  data.checkin_nomor_tiket
                    ? data.checkin_nomor_tiket.includes(search)
                    : false
                }
                loading={loading}
                onClick={handleCheckIn}
                htmlType="button"
                className="bg-orange-primary h-max text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[50px]">
                Check In
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
