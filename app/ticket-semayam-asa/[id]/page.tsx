'use client';

import { decryptNumber } from '@/utils/encryption';
import { useParams } from 'next/navigation';

import logoQris from '@/images/qris-logo.png';
import qrisSample from '@/images/qris-sample.png';
import Image from 'next/image';

export default function DetailSemayamAsa() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const idDecrypted = decryptNumber(id, 12);
  console.log(idDecrypted);

  return (
    <div>
      <main className="bg-wall-texture overflow-hidden lg:px-[100px] lg:py-[200px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 border-2 max-h-max">
            <div className="xs:p-[6px] lg:p-[30px]">
              <div className="grid xs:grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-[20px]">
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
                    <p className="creato text-[18px] font-[400]">
                      No. Identitas
                    </p>
                    <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                      358910291816
                    </h1>
                  </div>
                  <div>
                    <p className="creato text-[18px] font-[400]">
                      Jumlah Tiket
                    </p>
                    <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                      2
                    </h1>
                  </div>
                  <div>
                    <p className="creato text-[18px] font-[400]">Total Harga</p>
                    <h1 className="creato xs:text-[20px] lg:text-[24px] font-[700]">
                      IDR 30.000
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center flex-col items-center gap-[30px] xs:mt-[40px]">
                  <div className="max-w-[300px]">
                    <Image src={logoQris} alt="logo qris" />
                  </div>
                  <div className="creato font-[500]">Scan QRIS</div>
                  <div>
                    <Image src={qrisSample} alt="logo qris" />
                  </div>
                </div>
              </div>

              <a
                href={'/public/assets/images/qris-sample.png'}
                download="image.jpg">
                <button
                  type="submit"
                  className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px] mt-[50px]">
                  Download QRIS
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
