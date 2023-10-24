'use client';

import { decryptNumber } from '@/utils/encryption';
import { useParams, useRouter } from 'next/navigation';

// import logoQris from '@/images/qris-logo.png';
// import qrisSample from '@/images/qris-sample.png';
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

export default function DetailSemayamAsa() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [data, setData] = useState<DataI | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const idDecrypted = decryptNumber(id, 144);
  const router = useRouter();

  const getDetailTransaction = async () => {
    try {
      const { data } = await WebsiteAPI.getDetailTransaction(idDecrypted, '');
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
      await WebsiteAPI.editTransactionById(idDecrypted, {
        image_uri: imageUrl,
      });
      toast.success('Form has sent successfully!');
      setTimeout(() => {
        router.push('/semayam-asa');
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
    }
  };

  const handleUploadBukti = async (file: Blob) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file as Blob);

        axios
          .post('https://betedx.adityaariizkyy.my.id/api/v1/upload', formData)
          .then((response) => {
            setImageUrl(response.data.data);
            toast.success('Image has uploaded successfully!');
            console.log(response);
          })
          .catch((error) => {
            toast.success('Failed when upload the image!');
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
          <div className="bg-white rounded-md p-5  max-h-max  min-h-screen">
            <div className="xs:p-[6px] lg:p-[30px]">
              {!data && <LoadingPage />}
              {data && (
                <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-[10px] sm:gap-[50px] items-start justify-start">
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
                        1. Lakukan transfer sejumlah total harga tiket yang
                        harus kamu bayar
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        2. Setelah transfer, lakukan screenshot bukti pembayaran
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        3. Upload bukti pembayaran
                      </div>
                      <div className="creato text-[18px] font-[400]">
                        4. Selesai
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="creato text-[18px] font-[700]">
                        Pilih salah satu metode pembayaran:
                      </div>
                      <div className="creato text-[18px] font-[400] mt-[10px]">
                        Bank BCA <br />
                        <span className="creato text-[18px] font-[700]">
                          5735380165
                        </span>{' '}
                        a/n Maria Desvita Sari:{' '}
                      </div>
                      <div className="creato text-[18px] font-[400] mt-[10px]">
                        Shopeepay & Dana <br />
                        <span className="creato text-[18px] font-[700]">
                          081234847606
                        </span>{' '}
                        a/n Maria Desvita Sari:{' '}
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="creato text-[18px] font-[700]">
                          Bukti Pembayaran
                        </div>
                        {imageUrl ? (
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
                        ) : (
                          <input
                            accept="image/*"
                            type="file"
                            id="myFile"
                            name="filename"
                            className="mt-[10px]"
                            onChange={(e) =>
                              handleUploadBukti(e.target.files[0])
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {imageUrl && (
                <button
                  onClick={handleEditTransaction}
                  type="button"
                  className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[50px]">
                  Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
