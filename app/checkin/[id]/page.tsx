'use client';

import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkin() {
  const [pin, setPin] = useState<string>();
  const isLoggedIn = localStorage.getItem('admin');

  const handleLogin = () => {
    if (pin === '290102') {
      localStorage.setItem('admin', 'payload_login');
      window.location.reload();
    } else {
      const err = 'Salah bjir, lu bukan admin ya?';
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
    }
  };

  let ComponentToRender;

  if (!isLoggedIn) {
    ComponentToRender = (
      <div>
        <p className="text-center">PIN:</p>
        <input
          onChange={(e) => setPin(e.target.value)}
          className={`h-[50px] text-center rounded-[6px] border-2 border-blue-primary w-full p-[12px] text-[16px] bg-white`}
          type="text"
          name="pin"
          id="pin"
        />
        <button
          onClick={handleLogin}
          className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[10px]">
          Log In
        </button>
      </div>
    );
  } else {
    ComponentToRender = (
      <div className="flex flex-col gap-[20px]">
        <div>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            Nomor Tiket
          </h1>
          <p className="creato text-[18px] font-[400]">SEMAYAM-ASA/A21-026</p>
        </div>
        <div>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            Semayam Asa TEDxUniversitas Brawijaya 2023
          </h1>
          <p className="creato text-[18px] font-[400]">
            27 Oktober 2023 | Nyore Cafe
          </p>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">Nama</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            Galih Permana
          </h1>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">Email</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            galih@tedx.com
          </h1>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">No. Telepon</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            0895383233303
          </h1>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">No. Identitas</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            358910291816
          </h1>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">Jumlah Tiket</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">2</h1>
        </div>
        <div>
          <p className="creato text-[18px] font-[400]">Total Harga</p>
          <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
            IDR 30.000
          </h1>
        </div>
        <button
          onClick={handleLogin}
          className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[10px]">
          Check In
        </button>
      </div>
    );
  }

  return (
    <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px] min-h-screen">
      <ToastContainer />
      <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0 min-h-screen">
        <div className="bg-white rounded-md p-5 border-2 max-h-max min-h-screen">
          <div className="flex justify-center min-h-screen items-center">
            {ComponentToRender}
          </div>
        </div>
      </div>
    </main>
  );
}
