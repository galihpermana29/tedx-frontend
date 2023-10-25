'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { ToastContainer } from 'react-toastify';
import { message } from 'antd';
// @ts-ignore
import QrReader from 'react-qr-scanner';

export default function Checkin() {
  const router = useRouter();
  const isAdmin = localStorage.getItem('admin');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value === '290102') {
      message.success('Login succees');
      localStorage.setItem('admin', 'cem_kontol');
      window.location.reload();
    }
    console.log(e?.target.value);
  };

  return (
    <div>
      <ToastContainer />
      <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 min-h-screen">
            {isAdmin && (
              <div>
                <div className="creato font-[700] text-[20px] xs:text-[17px] text-center">
                  Semayam Asa TEDxUniversitas Brawijaya 2023
                </div>
                <div className="creato font-[600] text-[15px] xs:text-[15px] text-center mt-[10px]">
                  Scan Your Ticket Here
                </div>
                <QrReader
                  delay={500}
                  style={{
                    height: '500px',
                  }}
                  // style={previewStyle}
                  // onError={this.handleError}
                  onScan={(e: { text: string | null } | null) => {
                    if (e) {
                      router.push(e.text);
                    } else {
                      return;
                    }
                  }}
                />
              </div>
            )}
            {!isAdmin && (
              <div className="flex flex-col h-screen items-center  justify-center">
                <label className="creato font-[700] text-[20px] xs:text-[17px] text-center">
                  PIN
                </label>
                <br />
                <input
                  onChange={handleChange}
                  className={`h-[50px] text-center rounded-[6px] border-2 border-blue-primary w-full p-[12px] text-[16px] bg-white `}
                  type={'number'}
                  name={'pin'}
                  id={'pin'}
                  placeholder={'Masukkan pin blok!'}
                  required
                  minLength={5}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
