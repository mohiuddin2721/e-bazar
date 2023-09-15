import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetPaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentData, isLoading, refetch } = useQuery({
        queryKey: ['allPaymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get("https://test-server-ten-psi.vercel.app/api/v1/payment")
            return res.data.data;
        }
    })

    return [paymentData, isLoading, refetch]
};

export default useGetPaymentHistory;