export type DataFieldForm = {
  label: string;
  value: string;
};

export interface FormFieldI {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  data: DataFieldForm[];
}
export interface TicketPayloadI {
  nama?: string;
  jenis_kelamin?: string;
  nomor_identitas?: string;
  asal_institusi?: string;
  domisili?: string;
  email?: string;
  nomor_telepon?: string;
  line_id?: string;
  instagram?: string;
  jumlah_tiket?: number | string;
  tanggal?: string;
  disabilitias?: string;
}

export type CoreTeam = {
  nama: string;
  fakultas: string;
  image_url: string;
  instagram: string;
  linkedIn: string;
};

export type DataOurTeam = {
  id: number;
  divisi: string;
  coreteam: CoreTeam[];
  volunteer: string[];
};

export type DataMerchItem = {
  id: number;
  nama: string;
  harga: string;
  deskripsi: string;
  thumbnail: string;
  link: string;
  detail: string[];
};
export interface OurTeamI {
  data: DataOurTeam[];
}

export interface MerchItemI {
  data: DataMerchItem[];
}

export type FAQContent = {
  question: string;
  answer: string;
};

export interface TransactionI {
  data: Data;
}

export interface AllTransactionI {
  data: Data[];
}

export interface Data {
  id: number;
  nama: string;
  jenis_kelamin: string;
  nomor_identitas: string;
  asal_institusi: string;
  domisili: string;
  email: string;
  nomor_telepon: string;
  line_id: string;
  instagram: string;
  jumlah_tiket: number;
  total_harga: number;
  tanggal: string;
  order_id: string;
  status_payment: string;
  image_uri: string;
  nomor_tiket: any;
  checkin_status: boolean;
  checkin_nomor_tiket: any;
  type?: string;
  status?: string;
}
