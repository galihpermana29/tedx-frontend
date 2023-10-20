import { MerchItemI, OurTeamI, TicketPayloadI } from '@/utils/interface';
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
): Promise<{ data: number }> {
  const { data } = await api.post<{ data: number }>(`/transactions`, payload);
  return data;
}

async function updateTransaction(
  payload: object,
  idTrans: string
): Promise<{ data: number }> {
  const { data } = await api.patch<{ data: number }>(
    `/transactions/${idTrans}`,
    payload
  );
  return data;
}

async function getDetailTransaction(
  id_trans: number,
  filter: string
): Promise<MerchItemI> {
  const { data } = await api.get<MerchItemI>(
    `/transactions/${id_trans}${filter ? filter : ''}`
  );
  return data;
}
async function getMerch(): Promise<MerchItemI> {
  const { data } = await api.get<MerchItemI>(`/merch`);
  return data;
}

const WebsiteAPI = {
  createTicket,
  getAllTeam,
  getMerch,
  createTransaction,
  getDetailTransaction,
  updateTransaction,
};

export default WebsiteAPI;
