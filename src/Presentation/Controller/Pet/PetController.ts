import { Controller, Get, Query, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetService } from '../../Service/Pet/PetService';
import { PetCreateDto } from '../../../Application/Dto/Pet/PetCreateDto';
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';

@ApiTags('Pets')
@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @ApiOperation({ summary: 'Add pets by person Id' })
  @ApiResponse({ status: 200, type: Pet })
  @Post('/person/:id')
  @UsePipes(new ValidationPipe())
  create(@Param('id') id: number, @Body() PetCreateDto: PetCreateDto) {
    return this.petService.create(id, PetCreateDto);
  }

  @ApiOperation({ summary: 'Get all pets by person' })
  @ApiResponse({ status: 200, type: [Pet] })
  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @ApiOperation({ summary: 'Get pets by person' })
  @ApiResponse({ status: 200, type: Pet })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.petService.findOne(id);
  }

  @ApiOperation({ summary: 'Update info pets' })
  @ApiResponse({ status: 200, type: Pet })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() updatePetsDto: PetUpdateDto) {
    return this.petService.update(id, updatePetsDto);
  }

  @ApiOperation({ summary: 'Remove pets' })
  @ApiResponse({ status: 200, type: Pet })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petService.remove(id);
  }
}
