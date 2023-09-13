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
  nama: string;
  jenis_kelamin: string;
  nomor_identitas: string;
  asal_institusi: string;
  domisili: string;
  email: string;
  nomor_telepon: string;
  line_id: string;
  instagram: string;
}

export type CoreTeam = {
  nama: string;
  fakultas: string;
  image_url: string;
  instagram: string;
  linkedin: string;
};

export type DataOurTeam = {
  id: number;
  divisi: string;
  coreteam: CoreTeam[];
  volunteer: string[];
};

export interface OurTeamI {
  data: DataOurTeam[];
}