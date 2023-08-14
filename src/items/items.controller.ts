import {
  Controller,
  Get,
  Post,
  Delete,
  // Put,
  Patch,
  Body,
  // Req,
  // Res,
  // HttpStatus,
  Param,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';
// import { Item } from './entities/item.entity';
import { Item } from '../../interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // @Get()
  // findAll(): string {
  //   return 'Get all items';
  // }

  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.status(HttpStatus.OK).send('Get all items');
  // }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  ////////////////////////////////////////////////////////////////////

  // @Post()
  // create(@Body() createItemDto: CreateItemDto): string {
  //   console.log({ ...createItemDto });
  //   return 'Add a new item';
  // }

  // @Post()
  // create(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
  //   console.log({ ...createItemDto });
  //   res.status(HttpStatus.CREATED).send();
  // }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  ////////////////////////////////////////////////////////////////////

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   return `Get the item with ID ${params.id}`;
  // }

  // @Get(':id')
  // findOne(@Param() params: any, @Res() res: Response) {
  //   res.json({
  //     message: `Get the item with ID ${params.id}`,
  //   });
  // }

  @Get(':id')
  findOne(@Param() params: any): Promise<Item> {
    return this.itemsService.findOne(params.id);
  }

  ////////////////////////////////////////////////////////////////////

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateItemDto: CreateItemDto, // <--
  // ): string {
  //   console.log({ ...updateItemDto });
  //   return `Update the item with ID ${id}`;
  // }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateItemDto: CreateItemDto, // <--
  //   @Res() res: Response,
  // ) {
  //   console.log({ ...updateItemDto });
  //   res.json({
  //     message: `Update the item with ID ${id}`,
  //   });
  // }

  ////////////////////////////////////////////////////////////////////

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateItemDto: UpdateItemDto, // <==
  // ): string {
  //   console.log({ ...updateItemDto });
  //   return `Update the item with ID ${id}`;
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateItemDto: UpdateItemDto, // <==
  //   @Res() res: Response,
  // ) {
  //   console.log({ ...updateItemDto });
  //   res.json({
  //     message: `Update the item with ID ${id}`,
  //   });
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateItemDto: UpdateItemDto, // <==
  // ) {
  //   this.itemsService.update(id, updateItemDto);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto, // <==
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  ////////////////////////////////////////////////////////////////////

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `Remove the item with ID ${id}`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string, @Res() res: Response) {
  //   res.json({
  //     message: `Remove the item with ID ${id}`,
  //   });
  // }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.remove(id);
  }
}
