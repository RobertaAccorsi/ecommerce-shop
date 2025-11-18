import { api } from "@/lib/axios";
import type { CustomerDTO } from "../dto/customer-dto";



const _ENDPOINT = "/customers";

export const CustomerService = {

    async list(): Promise<CustomerDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async getById(id: string): Promise<CustomerDTO> {
        const result = await api.get(`${_ENDPOINT}/${id}`);
        return result.data;
    },

    async create(customer: CustomerDTO): Promise<CustomerDTO> {
        const result = await api.post(_ENDPOINT, customer);
        return result.data;
    },

    update: async (id: string, customer: CustomerDTO): Promise<CustomerDTO> => {
  const result = await api.put(`${_ENDPOINT}/${id}`, customer);
  return result.data;
},
};