import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { PersonService } from '../../Service/Person/PersonService';
import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';

@ApiTags('Persons')
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @ApiOperation({ summary: 'Add new person' })
  @ApiResponse({ status: 200, type: Person })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() personDto: PersonCreateDto) {
    return await this.personService.create(personDto);
  }

  @ApiOperation({ summary: 'Get all person' })
  @ApiResponse({ status: 200, type: [Person] })
  @Get()
  async findAll() {
    return await this.personService.findAll();
  }

  @ApiOperation({ summary: 'Get person by id' })
  @ApiResponse({ status: 200, type: Person })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.personService.findOne(id);
  }

  @ApiOperation({ summary: 'Update info person' })
  @ApiResponse({ status: 200, type: Person })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() personDto: PersonUpdateDto) {
    return this.personService.update(id, personDto);
  }

  @ApiOperation({ summary: 'Remove person' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
