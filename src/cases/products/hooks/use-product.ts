import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";
import type { ProductDTO } from "../dto/product.dto";

export function useProducts() {
    return useQuery<ProductDTO[]>({
        queryKey: ["products"],
        queryFn: ProductService.list
    });
}

export function useProduct(id: string) {
    return useQuery<ProductDTO>({
        queryKey: ["products", id],
        queryFn: () => ProductService.getById(id),
        enabled: !!id
    });
}    


