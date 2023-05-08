import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('/:id')
  findAll(@Param('id') id) {
    return this.cryptoService.findAll(id);
  }

  @Post()
  create(@Body() body: CreateCryptoDto) {
    return this.cryptoService.create(body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.cryptoService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateCryptoDto) {
    return this.cryptoService.update(id, body);
  }
}
