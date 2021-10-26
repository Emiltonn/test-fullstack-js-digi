import Worker from '@modules/workers/typeorm/entities/Worker';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('departments')
class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Worker, worker => worker.department)
  workers: Worker[];

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Department;
