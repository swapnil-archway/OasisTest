import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { CryptoService } from './crypto.service';

@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @GrpcMethod('CryptoTransactionService', 'Create')
  create(@Payload() createCryptoDto: any) {
    return this.cryptoService.create(createCryptoDto);
  }

  @GrpcMethod('CryptoTransactionService', 'Get')
  findOne(@Payload() payload: any) {
    return this.cryptoService.findOne({ id: Number(payload.id) });
  }

  @GrpcMethod('CryptoTransactionService', 'Update')
  update(@Payload() updateCryptoDto: any) {
    return this.cryptoService.update({
      where: { id: Number(updateCryptoDto.id) },
      data: { ...updateCryptoDto },
    });
  }

  @GrpcMethod('CryptoTransactionService', 'Delete')
  remove(@Payload() payload: any) {
    return this.cryptoService.remove({ id: Number(payload.id) });
  }
}
