import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [CryptoController],
  providers: [CryptoService, PrismaService],
})
export class CryptoModule {}
