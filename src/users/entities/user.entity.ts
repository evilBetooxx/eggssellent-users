import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;
}