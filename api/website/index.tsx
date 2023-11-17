import {
  AllTransactionI,
  MerchItemI,
  OurTeamI,
  TicketPayloadI,
  TransactionI,
} from '@/utils/interface';
import api from '..';

async function getAllTeam(): Promise<OurTeamI> {
  const { data } = await api.get<OurTeamI>('/ourteams');
  return data;
}

async function createTicket(payload: TicketPayloadI): Promise<TicketPayloadI> {
  const { data } = await api.post<TicketPayloadI>(`/tickets`, payload);
  return data;
}

async function createTransaction(
  payload: TicketPayloadI
): Promise<{ data: { data: number; status: string } }> {
  const { data } = await api.post<{ data: { data: number; status: string } }>(
    `/transactions`,
    payload
  );
  return data;
}
async function createTransactionMainEvent(
  payload: TicketPayloadI
): Promise<{ data: { data: number; status: string } }> {
  const { data } = await api.post<{ data: { data: number; status: string } }>(
    `/mainevents`,
    payload
  );
  return data;
}

async function getDetailTransaction(
  id_trans: number,
  filter: string
): Promise<TransactionI> {
  const { data } = await api.get<TransactionI>(
    `/transactions/${id_trans}${filter !== '' ? filter : ''}`
  );
  return data;
}

async function getDetailTransactionMainEvent(
  id_trans: number,
  filter: string
): Promise<TransactionI> {
  const { data } = await api.get<TransactionI>(
    `/mainevents/${id_trans}${filter !== '' ? filter : ''}`
  );
  return data;
}

async function checkInTiket(
  id_trans: number,
  filter: string
): Promise<{ data: string }> {
  const { data } = await api.patch<{ data: string }>(
    `/checkin/${id_trans}${filter !== '' ? filter : ''}`
  );
  return data;
}

async function getAllTransaction(): Promise<AllTransactionI> {
  const { data } = await api.get<AllTransactionI>(`/transactions`);
  return data;
}
async function getAllTransactionMainEvent(): Promise<AllTransactionI> {
  const { data } = await api.get<AllTransactionI>(`/mainevents`);
  return data;
}

async function editTransactionById(
  id_trans: number,
  payload: { image_uri?: string; status_payment?: string }
): Promise<TransactionI> {
  const { data } = await api.patch<TransactionI>(
    `/transactions/${id_trans}`,
    payload
  );
  return data;
}

async function editTransactionByIdMainEvent(
  id_trans: number,
  payload: { image_uri?: string; status?: string }
): Promise<TransactionI> {
  const { data } = await api.patch<TransactionI>(
    `/mainevents/${id_trans}`,
    payload
  );
  return data;
}

async function getMerch(): Promise<MerchItemI> {
  const { data } = await api.get<MerchItemI>(`/merch`);
  return data;
}

async function getCounter(type: string): Promise<{ data: number }> {
  const { data } = await api.get<{ data: number }>(`/counter?type=${type}`);
  return data;
}

const WebsiteAPI = {
  createTicket,
  getAllTeam,
  getMerch,
  createTransaction,
  getDetailTransaction,
  editTransactionById,
  getAllTransaction,
  checkInTiket,
  createTransactionMainEvent,
  getDetailTransactionMainEvent,
  editTransactionByIdMainEvent,
  getAllTransactionMainEvent,
  getCounter,
};

export default WebsiteAPI;
