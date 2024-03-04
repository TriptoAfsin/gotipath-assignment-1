import { getLocal } from "@/utils/storageUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useCheckAuth = () => {
  const router = useRouter();
  const [checking, setIsChecking] = useState(true);
  const checkAuth = () => {
    if (!getLocal("user_info")?.data?.access_token) {
      router.push("/auth/login");
    } else {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { checking };
};

export default useCheckAuth;
