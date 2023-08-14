import { Injectable, Inject } from '@nestjs/common';
// import { Item } from './entities/item.entity';
// import { v4 as uuidv4 } from 'uuid';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Model } from 'mongoose';
import { Item } from '../../interfaces/item.interface';

@Injectable()
export class ItemsService {
  /**
   * Temporarily Using Hard-code
   */
  // private readonly items: Item[] = [
  //   {
  //     id: '28b5177b-48a0-4a69-b2ff-40d78d87bce3',
  //     name: 'Item One',
  //     description: 'This is item one.',
  //     qty: 100,
  //   },
  //   {
  //     id: 'a14f7dc8-1b51-428e-b342-da6d5dbc42b2',
  //     name: 'Item Two',
  //     description: 'This is item two.',
  //     qty: 200,
  //   },
  // ];
  /* ***************************************************************** */
  constructor(@Inject('ITEM_MODEL') private itemModel: Model<Item>) {}

  // findAll(): Item[] {
  //   return this.items;
  // }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  ///////////////////////////////////////////////////////////////////////

  // create(createItemDto: CreateItemDto): Item[] {
  //   const createdItem: Item = {
  //     id: uuidv4(),
  //     ...createItemDto,
  //   };
  //   this.items.push(createdItem);
  //   return this.items;
  // }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  ///////////////////////////////////////////////////////////////////////

  // findOne(id: string): Item {
  //   return this.items.find((item) => item.id === id);
  // }

  async findOne(id: string): Promise<Item> {
    // return await this.itemModel.findOne({ _id: id });
    ////////////////////////////////////////////////////
    return await this.itemModel.findById(id);
  }

  ///////////////////////////////////////////////////////////////////////

  // update(id: string, updateItemDto: UpdateItemDto): Item[] {
  //   const foundItem = this.items.find((item) => item.id === id);
  //   const updatedItem = { ...foundItem, ...updateItemDto };
  //   return this.items.map((item) => (item.id === id ? updatedItem : item));
  // }

  // async update(id: string, updateItemDto: UpdateItemDto) {
  //   await this.itemModel.updateOne({ _id: id }, updateItemDto);
  // }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, updateItemDto, {
      new: true,
    });
  }

  ///////////////////////////////////////////////////////////////////////

  // remove(id: string): Item[] {
  //   return this.items.filter((item) => item.id !== id);
  // }

  async remove(id: string): Promise<Item> {
    // const foundItem = await this.itemModel.findById(id);
    // return await foundItem.deleteOne();
    /////////////////////////////////////////////////////
    return await this.itemModel.findByIdAndRemove(id);
  }
}
