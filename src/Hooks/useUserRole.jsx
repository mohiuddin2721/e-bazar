import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserRole = () => {
    const { user } = useAuth()

    const { data: userRole, isLoading: userRoleLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`https://test-server-ten-psi.vercel.app/api/v1/users/roll?email=${user?.email}`);
                return res.data.data;
            }
        }
    })

    return [userRole, userRoleLoading]
};

export default useUserRole;