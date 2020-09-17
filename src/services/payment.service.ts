import Axios, { AxiosResponse } from "axios";

export const URL =
  "https://virtserver.swaggerhub.com/CPGFinanceSystems/rqpay/1.0.0/requests/";

interface RequestCreate {
  transactionId: string;
  terminalId: string;
  ibanPayer: string;
  amount: number;
  purposeCode: string;
  createdAt: string;
}

export const triggerPayment = (data: RequestCreate): Promise<AxiosResponse> =>
  Axios.post(`${URL}create`, data);

export const getStatus = (): Promise<AxiosResponse> =>
  Axios.get(`${URL}status?transactionId=${mockedCreation.transactionId}`);

export const mockedCreation = {
  transactionId: "1324354657689",
  terminalId: "123456789",
  ibanPayer: "DE33100205000001194700",
  amount: 12525.68,
  purposeCode:
    "Bikers Best Shop, Strasbourg, 17.09.2020, TransactionID 123456789, TerminalID 1324354657689",
  createdAt: "2020-09-17T13:59:31.238Z",
};

export interface GeneralProps {
  changeStep: (step: number) => void;
  toggleLoading: () => void;
}
