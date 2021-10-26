import Department from '@modules/departments/typeorm/entities/Department';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workers')
class Worker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Department, department => department.workers)
  department: Department;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Worker;
