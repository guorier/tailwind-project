export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const seed: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@gmail.com" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@gmail.com" },
  { id: "5kma53ae", amount: 874, status: "pending", email: "Silas22@gmail.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com" },
];

/** 데이터 테이블 예제용 목록. 정렬·필터·페이지를 보이려고 여러 번 반복한다. */
export const payments: Payment[] = Array.from({ length: 4 }, (_, i) =>
  seed.map((row) => ({ ...row, id: `${row.id}${i > 0 ? i : ""}` })),
).flat();
