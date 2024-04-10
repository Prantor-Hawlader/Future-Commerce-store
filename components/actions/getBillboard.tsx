import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/5f7db8c4-ef79-430d-85d6-e5ed90ec9075`);
  return res.json();
};

export default getBillboard;
