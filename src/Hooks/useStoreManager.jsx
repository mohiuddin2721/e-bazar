import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStoreManager = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: isStoreManager, isLoading: isStoreManagerLoading } = useQuery({
        queryKey: ['isStoreManager', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/storeManager/${user?.email}`);
            // console.log('res for store manager: ', res)
            return res.data.data.storeManager;
        }
    })
    return [isStoreManager, isStoreManagerLoading]
}

export default useStoreManager;