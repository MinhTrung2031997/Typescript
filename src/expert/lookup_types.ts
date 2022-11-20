export type SubmitRequest = {
  transactionId: string;
  personal: {
    email: string;
    phone: string;
    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    }[];
    gentle: string;
    dob: string;
    birthCountry: string;
  };
  driver: {
    licenceNumber: string;
    expiryDate: string;
  };
  consent: {
    understandInformation: boolean;
    informationTrue: boolean;
    informationConsiderd: boolean;
  };
  payment: {
    creditCardToken: string;
  };
};

type PaymentRequest = SubmitRequest["payment"];
type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0];

export function getPayment(): PaymentRequest {
  return {
    creditCardToken: "slfhakfha2",
  };
}
