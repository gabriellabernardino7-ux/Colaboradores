import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  full_name: string;

  @Column({ length: 20, unique: true })
  document: string;

  @Column({ length: 100 })
  role: string;

  
  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    transformer: { to: (v: number) => v, from: (v: string) => parseFloat(v) },
  })
  salary: number;
}
