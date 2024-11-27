import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();
  return {
    goBack: () => {
      router.back();
    },
    goTo: (path: string) => {
      router.push(path);
    },
  };
};
