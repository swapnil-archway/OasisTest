import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CryptoTransactionService } from 'src/proto/crypto';

@Injectable()
export class CryptoService implements OnModuleInit {
  private cryptoService: CryptoTransactionService;

  constructor(@Inject('GRPC_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.cryptoService = this.client.getService<CryptoTransactionService>(
      'CryptoTransactionService',
    );
  }

  findAll(id: number) {
    return this.cryptoService.Get({ id });
  }

  create(data: any) {
    return this.cryptoService.Create({ ...data });
  }

  delete(id: number) {
    return this.cryptoService.Delete({ id });
  }

  update(id: number, data: any) {
    return this.cryptoService.Update({ id, ...data });
  }
}
