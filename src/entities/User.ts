import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public hashedPassword: string;
}
