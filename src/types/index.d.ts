import { string } from "prop-types";

export interface ItemInput {
  id: string;
  name: string;
  rate: string;
  quantity: string;
  [key: string]: string;
}

export type ICustomer = {
  name: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
};

export interface FormData{
  firstName: string,
  lastName: string,
  businessName: string,
  phone: string,
  industry: string,
  email: string,
  createPassword: string,
  confirmPassword: string,
}

export type ExpenseCategory =
  | "Automobiles"
  | "Equipments"
  | "Labor"
  | "Rent"
  | "Travel"
  | "Logistics"
  | "Professional services"
  | "Advertising"
  | "Insurance"
  | "Home office";

export interface IExpense {
  customerId: string;
  customer: {
    firstName: string;
    lastName: string;
    id: string;
  };
  id: string;
  companyId: string;
  createdAt: string;
  type: string;
  date: string;
  category: ExpenseCategory;
  vendor?: string;
  currency?: string;
  date?: string;
  lineItems?: Array[{
    id: string;
    amount: string;
    name: string;
    quantity: string;
  }];
  amount: string;
  category?: string;
  description: string;
  paymentMethod?: string;
  type?: string;
  vendor?: string;
  billedTo?: string;
  notes?: string;
  reference?: string;
}

export interface ICreateInvoiceData {
  customerId?: string;
   invoiceNumber?: string;
   invoiceDueAt: string;
  description?: string;
  status?: "pending" | "paid" | "overdue" | "draft" | "cancelled";
   issueDate?: string;
  additionalInformation?: string;
  shippingCharge?: string;
  discount?: string;
  tax?: string;
  isReoccurring? : boolean
  isReoccurringStartDate?: string | undefined;
  isReoccurringEndDate?: string | undefined;
  reoccurringGroupName?: string | undefined;
  task?: number;
  inventories?: Array[{
    id: string;
    amount: number;
    quantity: number;
  }];
  currency?: string;
}

export interface IInvoice {
  additionalInformation: string;
  companyId: string;
  createdAt: number | Date | string;
  customer: {
    firstName: string;
    lastName: string;
    id: string;
  };
  description: string;
  discount: string;
  id: string;
  inventories: Array<{
    amount: string;
    id: string;
    quantity: string;
  }>;
  invoiceDueAt: string | number | Date;
  invoiceNumber: string;
  issueDate: number;
  isReoccurring: boolean;
  isReoccurringEndDate?: string | number | Date;
  isReoccurringStartDate?: string | number | Date;
  purchaseOrderNumber: number;
  reoccurringGroupName?: string;
  shippingCharge: number;
  status: "pending" | "paid" | "overdue" | "draft" | "cancelled";
  tax: string;
}

export interface ICustomerCreateData {
  companyId: string;
  firstName: string;
  email: string;
  phone: string;
  address: string;
  lastName: string;
  isOptedIn: boolean;
  outletId: string;
}

export interface IPaginationMeta {
  /**
   * Max Number of data to expect.
   */
  limit: number;
  /**
   * String to use in fetching the next page
   */
  cursor: string;
  /**
   * String to use in fetching the previous page
   */
  backCursor?: string;
  /**
   * Indicated if there are more data when true.
   */
  hasMoreData: boolean;
  /**
   * Number of data returned.
   */
  count: number;
}

export interface IPayment {
  amount: string;
  companyId: string;
  createdAt: number;
  customerId: string;
  entityId: string;
  "entityId#status": string;
  entityType: string;
  id: string;
  outletId: string;
  "outletId#status": string;
  paymentType: "card" | "transfer";
  status: "pending";
}

export interface TransactionEntity {
  id?: string;
  companyId: string;
  customerId: string;
  entityType?: TransactionType;
  entityId: string;
  description?: string;
  status?: PaymentStatus;
  paymentType: PaymentType;
  outletId: string;
  paymentId: string;
  paymentDate?: string;
  amount: number;
  paymentEvidenceLink?: number;
  createdAt?: number;
  updatedAt?: number;
  "entityId#status"?: string;
  "outletId#status"?: string;
}

export interface TransactionEvidenceEntity {
  customerId?: string;
  entityId?: string;
  fileFormat: "jpg" | "jpeg" | "png";
  transactionType: TransactionType;
}

export type PaymentGateway = "flutterwave" | "paystack";

export type TransactionType = "expenses" | "revenue";

export type PaymentType = "cash" | "card" | "transfer" | PaymentGateway;

export type PaymentStatus = "successful" | "failed" | "pending" | "cancelled";

export interface ILineItem {
  amount: string;
  name: string;
  quantity: string;
}
export interface Transaction {
  createdAt: number;
  amount: number;
  // type: string;
  customer: {
    firstName: string;
    lastName: string;
  };
}
export interface ICreateExpenseData {
  customerId: string;
  id?: string;
  companyId?: string;
  createdAt?: number;
  date: string;
  vendor?: string;
  currency?: string;
  lineItems?: Array[{
    id: string;
    amount: string;
    name: string;
    quantity: string;
  }];
  amount: number;
  category?: string;
  // description: string;
  paymentMethod: string;
  type?: string;
  billedTo?: string;
  reference?: string;
  additionalInformaton?: string;
  outletId?: string,
}
export interface IEditExpenseData {
  currency?: string;
  date: string;
  type?: string;
  lineItems?: Array[{
    amount: string;
    name: string;
    quantity: string;
  }];
  amount?: number;
  category?: string;
  description: string;
}
export * from "./profile";

export interface ICreateInventoryData {
  name: string;
  price: string;
  units: string;
  units_price: string;
  companyId?: string;
  description: string;
}
export * from './profile'
