import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetService } from '../../Service/Pet/PetService';
import { PetCreateDto } from '../../../Application/Dto/Pet/PetCreateDto';
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';

@ApiTags('Pets')
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Add pets by person Id' })
  @ApiResponse({ status: 200, type: Pet })
  @Post('/person/:id')
  @UsePipes(new ValidationPipe())
  create(@Param('id') id: number, @Body() PetCreateDto: PetCreateDto) {
    return this.petService.create(id, PetCreateDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Get all pets by person' })
  @ApiResponse({ status: 200, type: [Pet] })
  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Get pets by person' })
  @ApiResponse({ status: 200, type: Pet })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.petService.findOne(id);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Update info pets' })
  @ApiResponse({ status: 200, type: Pet })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() updatePetsDto: PetUpdateDto) {
    return this.petService.update(id, updatePetsDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Remove pets' })
  @ApiResponse({ status: 200, description: 'Remove зуе successful' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petService.remove(id);
  }
}
