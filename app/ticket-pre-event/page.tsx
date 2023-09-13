'use client';

type DataFieldForm = {
  label: string;
  value: string;
};

interface FormFieldI {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  data: DataFieldForm[];
}
type PayloadKeys = 'nama' | 'nomor_identitas' | string;
type PayloadRecords = Record<PayloadKeys, string>;

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
  {
    name: 'nomor_telepon',
    label: 'Nomor Telepon (08)',
    type: 'string',
    placeholder: 'Ex: 08',
    data: [],
  },
  {
    name: 'line_id',
    label: 'ID Line',
    type: 'string',
    placeholder: 'Ex: lineid',
    data: [],
  },
  {
    name: 'instagram',
    label: 'Instagram',
    type: 'string',
    placeholder: 'Ex: instagramid',
    data: [],
  },
];

export default function TicketPreEvent() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: PayloadRecords = {};
    formData.forEach((d) => {
      if (e.target instanceof HTMLFormElement) {
        payload[d.name] =
          e.target.elements[d.name as keyof FormFieldI]?.value || '';
      }
    });
    console.log(payload);
  };
  return (
    <div className="">
      <main className="bg-wall-texture overflow-hidden lg:p-[100px] xs:p-[20px]">
        <div className="relative p-5 rounded-xl w-full bg-flower max-h-max xs:my-[80px] lg:my-0">
          <div className="bg-white rounded-md p-5 border-2 max-h-max">
            <h1 className="text-[48px] mb-5 rosela text-blue-primary text-center">
              Registrasi Di Sini
            </h1>
            <form className="lg:p-[20px] xs:p-0" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-x-[30px] gap-y-[10px] xs:grid-cols-1">
                {formData.map((d) => {
                  return d.type === 'radio' ? (
                    <div className="flex flex-col">
                      <p className="creato font-[700] text-[20px] xs:text-[17px]">
                        {d.label}
                      </p>
                      <div className="flex gap-[20px] mt-[10px]">
                        {d.data.map((item) => (
                          <div key={item.label} className="gap-[5px] flex">
                            <input
                              type="radio"
                              id={item.value}
                              name={d.name}
                              value={item.value}
                              required
                            />
                            <label className="text-[16px]" htmlFor={item.value}>
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div key={d.name}>
                      <label
                        className="creato font-[700] text-[20px] xs:text-[17px]"
                        htmlFor={d.name}>
                        {d.label}
                      </label>
                      <br />
                      <input
                        className="h-[50px] rounded-[6px] border-2 border-blue-primary w-full p-[12px] text-[16px]"
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

              <div className="my-[30px] text-justify">
                *Tiket Panggung Swara Insan ini menawarkan hal yang unik karena
                setiap pendaftar akan melalui proses pemilihan secara otomatis
                melalui sistem website kami, sehingga kamu memiliki kesempatan
                yang sama untuk mendapatkan tiket tersebut!
              </div>
              <button
                type="submit"
                className="bg-orange-primary text-white text-center text-[20px] w-full rounded-[6px] p-[12px]">
                Daftar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
