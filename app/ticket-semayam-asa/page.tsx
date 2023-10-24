'use client';

import WebsiteAPI from '@/api/website';
import { encryptNumber } from '@/utils/encryption';
// import { LoadingPage } from '@/components/shared/Loading';
import { FormFieldI, TicketPayloadI } from '@/utils/interface';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const formData: FormFieldI[] = [
  {
    name: 'nama',
    label: 'Nama Lengkap',
    type: 'text',
    placeholder: 'Ex : Galih Permana',
    data: [],
  },
  {
    name: 'nomor_identitas',
    label: 'No. Identitas (NIM/NIK/SIM)',
    type: 'text',
    placeholder: 'Ex: 115150607111011',
    data: [],
  },
  {
    name: 'asal_institusi',
    label: 'Asal Institusi',
    type: 'text',
    placeholder: 'Ex: Universitas Brawijaya',
    data: [],
  },
  {
    name: 'instagram',
    label: 'Instagram',
    type: 'string',
    placeholder: 'Ex: instagramid',
    data: [],
  },
  {
    name: 'domisili',
    label: 'Domisili',
    type: 'text',
    placeholder: 'Ex: Batam',
    data: [],
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Ex: galih@tedx.com',
    data: [],
  },
  {
    name: 'nomor_telepon',
    label: 'Nomor Telepon (08)',
    type: 'string',
    placeholder: 'Ex: 08',
    data: [],
  },
  {
    name: 'jenis_kelamin',
    label: 'Jenis Kelamin',
    type: 'radio',
    placeholder: 'Ex: galih@tedx.com',
    data: [
      {
        label: 'Pria',
        value: 'Pria',
      },
      {
        label: 'Wanita',
        value: 'Wanita',
      },
    ],
  },
  // {
  //   name: 'line_id',
  //   label: 'ID Line',
  //   type: 'string',
  //   placeholder: 'Ex: lineid',
  //   data: [],
  // },
  {
    name: 'tanggal',
    label: 'Pilih Tanggal Kunjungan',
    type: 'radio',
    placeholder: 'Ex: galih@tedx.com',
    data: [
      {
        label: '27 Oktober 2023',
        value: '27-10-2023',
      },
      {
        label: '28 Oktober 2023',
        value: '28-10-2023',
      },
      {
        label: '29 Oktober 2023',
        value: '29-10-2023',
      },
    ],
  },
  {
    name: 'jumlah_tiket',
    label: 'Jumlah Tiket',
    type: 'increement',
    placeholder: 'Ex: galih@tedx.com',
    data: [],
  },
];

export default function TicketPreEvent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);
  const router = useRouter();
  console.log(loading);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const payload: TicketPayloadI = {} as TicketPayloadI;
    formData.forEach((d) => {
      if (e.target instanceof HTMLFormElement) {
        const keys = d.name as keyof FormFieldI;
        const targetEl = e.target.elements.namedItem(keys);

        payload[d.name as keyof TicketPayloadI] =
          (targetEl as HTMLInputElement)?.value || '';
      }
    });
    payload.line_id = 'tes';
    payload.jumlah_tiket = counter;

    try {
      const { data } = await WebsiteAPI.createTransaction(payload);
      console.log(data);
      toast.success(
        'Terima kasih sudah melakukan registrasi, periksa email kamu untuk informasi lebih lanjut!',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );

      setTimeout(() => {
        router.push(
          `/ticket-semayam-asa/${encryptNumber(data.toString(), 144)}`
        );
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

  return (
    <div className="">
      <ToastContainer />

      <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 border-2 max-h-max">
            <div>
              <h1 className="text-[48px] mb-5 rosela text-blue-primary text-center">
                Registrasi Di Sini
              </h1>
              <form className="lg:p-[20px] xs:p-0" onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-x-[30px] gap-y-[10px] xs:grid-cols-1">
                  {formData.map((d) => {
                    return d.type === 'radio' ? (
                      <div className="flex flex-col h-auto">
                        <p className="creato font-[700] text-[20px] xs:text-[17px]">
                          {d.label}
                        </p>
                        <div
                          className={`flex gap-[20px] mt-[10px]  ${
                            d.name === 'tanggal' ? 'flex-col' : 'flex-row'
                          }`}>
                          {d.data.map((item) => (
                            <div key={item.label} className={`gap-[5px] flex`}>
                              <input
                                type="radio"
                                id={item.value}
                                name={d.name}
                                value={item.value}
                                required
                              />
                              <label
                                className="text-[16px]"
                                htmlFor={item.value}>
                                {item.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : d.type === 'increement' ? (
                      <div key={d.name} className="h-auto">
                        <label
                          className="creato font-[700] text-[20px] xs:text-[17px]"
                          htmlFor={d.name}>
                          {d.label}
                        </label>
                        <br />
                        <div className="flex items-center gap-[20px] mt-[10px]">
                          <div>
                            <svg
                              className="cursor-pointer"
                              onClick={() => {
                                if (counter >= 10) return;
                                setCounter(counter + 1);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none">
                              <path
                                d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V9.25H14.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75H10.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25H9.25V5.75C9.25 5.33579 9.58579 5 10 5Z"
                                fill="#E83F1C"
                              />
                            </svg>
                          </div>
                          <div className="creato font-[700] text-[20px] xs:text-[17px]">
                            {counter}
                          </div>
                          <div>
                            <svg
                              onClick={() => {
                                if (counter <= 1) return;
                                setCounter(counter - 1);
                              }}
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none">
                              <path
                                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM16.25 11.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75C11.2529 12.75 13.211 12.75 7.75 12.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25C13.211 11.25 11.2529 11.25 16.25 11.25Z"
                                fill="#E83F1C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={d.name} className="">
                        <label
                          className="creato font-[700] text-[20px] xs:text-[17px]"
                          htmlFor={d.name}>
                          {d.label}
                        </label>
                        <br />
                        <input
                          className={`h-[50px] rounded-[6px] border-2 border-blue-primary w-full p-[12px] text-[16px] bg-white ${
                            d.type === 'blank' ? 'hidden' : 'visible'
                          }`}
                          type={d.type}
                          name={d.name}
                          id={d.name}
                          placeholder={d.placeholder}
                          required
                          minLength={d.name === 'nomor_identitas' ? 15 : 0}
                          pattern={
                            d.name === 'nomor_telepon'
                              ? '08[0-9]{7}[0-9]{1,4}$'
                              : null
                          }
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[50px]">
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
