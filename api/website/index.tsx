import { OurTeamI, TicketPayloadI } from '@/utils/interface';
import api from '..';

async function getAllTeam(): Promise<OurTeamI> {
  const { data } = await api.get<OurTeamI>('/ourteams');
  return data;
}

async function createTicket(payload: TicketPayloadI): Promise<TicketPayloadI> {
  const { data } = await api.post<TicketPayloadI>(`/tickets`, payload);
  return data;
}

const WebsiteAPI = {
  createTicket,
  getAllTeam,
};

export default WebsiteAPI;
