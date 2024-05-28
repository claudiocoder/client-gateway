import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Creates a new product';
  }

  @Get()
  findAllProducts() {
    return 'Returns all products';
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return `Returns product with id ${id}`;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return `Updates product with id ${id} with ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `Deletes product with id ${id}`;
  }
}
