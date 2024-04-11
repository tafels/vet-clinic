import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { PersonService } from '../../Service/Person/PersonService';
import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';

@ApiTags('Persons')
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Add new person' })
  @ApiResponse({ status: 200, type: Person })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() personDto: PersonCreateDto) {
    return await this.personService.create(personDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Get all person has is active' })
  @ApiResponse({ status: 200, type: [Person] })
  @Get()
  async findAll() {
    return await this.personService.findAll();
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Get person by id' })
  @ApiResponse({ status: 200, type: Person })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.personService.findOne(id);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Update info person' })
  @ApiResponse({ status: 200, type: Person })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() personUpdateDto: PersonUpdateDto) {
    return this.personService.update(id, personUpdateDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Remove person' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
