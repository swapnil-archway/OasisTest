/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "crypto";

export interface Empty {
}

export interface TransactionById {
  id: number;
}

export interface Transaction {
  id: number;
  timestamp: string;
  userId: string;
  cryptoName: string;
  amount: number;
  transactionType: string;
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseTransactionById(): TransactionById {
  return { id: 0 };
}

export const TransactionById = {
  encode(message: TransactionById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionById {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: TransactionById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionById>, I>>(base?: I): TransactionById {
    return TransactionById.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionById>, I>>(object: I): TransactionById {
    const message = createBaseTransactionById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { id: 0, timestamp: "", userId: "", cryptoName: "", amount: 0, transactionType: "" };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.cryptoName !== "") {
      writer.uint32(34).string(message.cryptoName);
    }
    if (message.amount !== 0) {
      writer.uint32(45).float(message.amount);
    }
    if (message.transactionType !== "") {
      writer.uint32(50).string(message.transactionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timestamp = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cryptoName = reader.string();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.transactionType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      cryptoName: isSet(object.cryptoName) ? String(object.cryptoName) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      transactionType: isSet(object.transactionType) ? String(object.transactionType) : "",
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.userId !== undefined && (obj.userId = message.userId);
    message.cryptoName !== undefined && (obj.cryptoName = message.cryptoName);
    message.amount !== undefined && (obj.amount = message.amount);
    message.transactionType !== undefined && (obj.transactionType = message.transactionType);
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.id = object.id ?? 0;
    message.timestamp = object.timestamp ?? "";
    message.userId = object.userId ?? "";
    message.cryptoName = object.cryptoName ?? "";
    message.amount = object.amount ?? 0;
    message.transactionType = object.transactionType ?? "";
    return message;
  },
};

export interface CryptoTransactionService {
  Create(request: Transaction): Promise<Transaction>;
  Get(request: TransactionById): Promise<Transaction>;
  Update(request: Transaction): Promise<Transaction>;
  Delete(request: TransactionById): Promise<Empty>;
}

export class CryptoTransactionServiceClientImpl implements CryptoTransactionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "crypto.CryptoTransactionService";
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Get = this.Get.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  Create(request: Transaction): Promise<Transaction> {
    const data = Transaction.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => Transaction.decode(_m0.Reader.create(data)));
  }

  Get(request: TransactionById): Promise<Transaction> {
    const data = TransactionById.encode(request).finish();
    const promise = this.rpc.request(this.service, "Get", data);
    return promise.then((data) => Transaction.decode(_m0.Reader.create(data)));
  }

  Update(request: Transaction): Promise<Transaction> {
    const data = Transaction.encode(request).finish();
    const promise = this.rpc.request(this.service, "Update", data);
    return promise.then((data) => Transaction.decode(_m0.Reader.create(data)));
  }

  Delete(request: TransactionById): Promise<Empty> {
    const data = TransactionById.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
