'use client';

import { decryptNumber } from '@/utils/encryption';
import { useParams, useRouter } from 'next/navigation';

import { Button, Spin } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from 'axios';
import WebsiteAPI from '@/api/website';
import { LoadingPage } from '@/components/shared/Loading';

interface DataI {
  email: string;
  nomor_telepon: string;
  nomor_identitas: string;
  jumlah_tiket: number;
  total_harga: number;
  tanggal: string;
  nama: string;
}

export default function DetailTicketMainEvent() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [data, setData] = useState<DataI | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const idDecrypted = decryptNumber(id, 144);
  const router = useRouter();

  const getDetailTransaction = async () => {
    try {
      const { data } = await WebsiteAPI.getDetailTransactionMainEvent(
        idDecrypted,
        ''
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

  const handleEditTransaction = async () => {
    try {
      setLoading(true);
      await WebsiteAPI.editTransactionByIdMainEvent(idDecrypted, {
        image_uri: imageUrl,
        status: 'pending',
      });
      toast.success('Form has sent successfully!');
      setTimeout(() => {
        router.push('/ticket');
      }, 1000);
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

  const handleUploadBukti = async (file: Blob) => {
    try {
      setLoading(true);
      if (file) {
        const formData = new FormData();
        formData.append('file', file as Blob);
        toast.warning('Waiting for image to be uploaded..');
        axios
          .post('https://betedx.adityaariizkyy.my.id/api/v1/upload', formData)
          .then((response) => {
            setImageUrl(response.data.data);
            toast.success('Image has uploaded successfully!');
          })
          .catch((error) => {
            toast.success('Image size is greater than 1.5mb');
            console.error(error);
          });
      }
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

  useEffect(() => {
    getDetailTransaction();
  }, []);

  return (
    <div>
      <ToastContainer />
      <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 ">
            <div className="xs:p-[6px] lg:p-[30px]">
              {!data && <LoadingPage />}
              {data && (
                <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-[10px] sm:gap-[50px] items-start justify-start">
                  <div className="flex flex-col gap-[20px] ">
                    <div>
                      <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                        Memantik Baskara | TEDxUniversitas Brawijaya 2023
                      </h1>
                      {/* <p className="creato text-[18px] font-[400]">Venue TBA</p> */}
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
                      <p className="creato text-[18px] font-[400]">
                        No. Telepon
                      </p>
                      <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                        {data.nomor_telepon}
                      </h1>
                    </div>
                    <div>
                      <p className="creato text-[18px] font-[400]">
                        No. Identitas
                      </p>
                      <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                        {data.nomor_identitas}
                      </h1>
                    </div>
                    <div>
                      <p className="creato text-[18px] font-[400]">
                        Jumlah Tiket
                      </p>
                      <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                        {data.jumlah_tiket}
                      </h1>
                    </div>
                    <div>
                      <p className="creato text-[18px] font-[400]">
                        Total Harga
                      </p>
                      <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                        IDR {data.total_harga}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] xs:mt-[40px] sm:mt-0 ">
                    <div className="font-[20px] w-full">
                      <div className="creato text-[18px] font-[700]">
                        Instruksi Pembayaran:
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        1. Silahkan lakukan pembayaran dengan nominal yang
                        tertera pada rangkuman pemesanan
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        2. Pembayaran dapat dilakukan melalui beberapa metode
                        yang ada
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        3. Screenshot bukti pembayaran
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        4. Upload bukti pembayaran
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="creato text-[18px] font-[700]">Note:</div>
                      <div className="creato text-[18px] font-[400] mt-[10px]">
                        Harap segera lakukan pembayaran dan mengunggah bukti
                        pembayaran, dengan maksimal waktu
                        <span className="font-[700]">5 menit</span> sejak
                        rangkuman pemesanan kamu muncul pada laman website kami,
                        jika melewati batas waktu tersebut data yang telah kamu
                        submit sebelumnya akan terhapus.
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="creato text-[18px] font-[700]">
                        Pilih salah satu metode pembayaran:
                      </div>
                      <div className="creato text-[18px] font-[400] mt-[10px]">
                        Bank BCA <br />
                        <span className="creato text-[18px] font-[700]">
                          2302817449
                        </span>{' '}
                        a/n Kezia Agustina Hatiuran
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="creato text-[18px] font-[700]">
                          Bukti Pembayaran (max: 1.5mb)
                        </div>
                        {loading && <Spin />}
                        {imageUrl && !loading && (
                          <div className="mt-[10px] max-w-[200px]">
                            <Image
                              className="w-full"
                              alt="bukti"
                              src={imageUrl}
                              width={100}
                              height={100}
                              loader={() => imageUrl}
                            />
                          </div>
                        )}
                        <input
                          accept="image/*"
                          type="file"
                          id="myFile"
                          name="filename"
                          className="mt-[10px]"
                          onChange={(e) => handleUploadBukti(e.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                loading={loading}
                disabled={!imageUrl}
                onClick={handleEditTransaction}
                htmlType="button"
                className="bg-orange-primary h-max text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[50px]">
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
