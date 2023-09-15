import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthProvider";

const useAddress = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data: userAddress = [], refetch } = useQuery({
        queryKey: ['address', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://test-server-ten-psi.vercel.app/api/v1/address?email=${user?.email}`);
            return res.json();
        }
    });

    return [userAddress, isLoading, refetch]

}

export default useAddress;