import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { resolve } from 'path';

@Module({
  controllers: [CryptoController],
  providers: [
    CryptoService,
    {
      provide: 'GRPC_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'crypto',
            protoPath: resolve(__dirname, './proto/crypto.proto'),
            protoLoader: '',
          },
        });
      },
    },
  ],
})
export class CryptoModule {}
