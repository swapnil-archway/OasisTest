import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Transaction, Prisma } from '@prisma/client';

@Injectable()
export class CryptoService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    return this.prisma.transaction.create({
      data,
    });
  }

  findOne(
    transactionWhereUniqueInput: Prisma.TransactionWhereUniqueInput,
  ): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({
      where: transactionWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionUpdateInput;
  }): Promise<Transaction> {
    const { where, data } = params;
    return this.prisma.transaction.update({
      data,
      where,
    });
  }

  remove(where: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    return this.prisma.transaction.delete({
      where,
    });
  }
}
