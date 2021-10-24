import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workers')
class Worker {
  @PrimaryGeneratedColumn('increment')
  idworker: number;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  department: string;

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
