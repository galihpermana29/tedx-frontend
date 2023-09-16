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

async function getMerch(): Promise<MerchItemI> {
  const { data } = await api.get<MerchItemI>(`/merch`);
  return data;
}

const WebsiteAPI = {
  createTicket,
  getAllTeam,
  getMerch,
};

export default WebsiteAPI;
