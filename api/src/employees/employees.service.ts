import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private readonly repo: Repository<Employee>) {}

  findAll() {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number) {
    const employee = await this.repo.findOneBy({ id });
    if (!employee) throw new NotFoundException(`Employee ${id} não encontrado`);
    return employee;
  }

  async create(dto: CreateEmployeeDto) {
    try {
      return await this.repo.save(this.repo.create(dto));
    } catch (e) {
      this.tratarErro(e);
    }
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    try {
      return await this.repo.save(Object.assign(employee, dto));
    } catch (e) {
      this.tratarErro(e);
    }
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    await this.repo.remove(employee);
  }

  private tratarErro(e: any): never {
    if (e?.code === '23505') {
      throw new ConflictException('Já existe um funcionário com esse document');
    }
    throw e;
  }
}
