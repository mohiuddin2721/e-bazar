import { useQuery } from "@tanstack/react-query";

const useGetAllCategory = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['getAllCategory'],
        queryFn: async () => {
            const res = await fetch('https://test-server-ten-psi.vercel.app/api/v1/category');
            const data = res.json();
            return data;
        }
    });
    const allCategory = data?.data;
    return { allCategory, isLoading };
};

export default useGetAllCategory;