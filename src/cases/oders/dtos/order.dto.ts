import type { CustomerDTO } from "@/cases/customers/dto/customer-dto";
import type { OrderItemDTO } from "./order-item.dto";


export interface OrderDTO {
    id?: string;
    custommer: CustomerDTO | string;
    status: string;
    total: number;
    shipping: number;
    items?: OrderItemDTO[];
    createdAt?: Date;
    updatedAt?: Date;
}
