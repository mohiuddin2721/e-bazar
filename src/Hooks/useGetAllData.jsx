import { useQuery } from "@tanstack/react-query";

const useGetAllData = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['getAllProducts'],
        queryFn: async () => {
            const res = await fetch('https://test-server-ten-psi.vercel.app/api/v1/products');
            const data = res.json();
            return data;
        }
    });
    const allProduct = data?.data?.products;
    return { allProduct, isLoading, refetch };
};

export default useGetAllData;