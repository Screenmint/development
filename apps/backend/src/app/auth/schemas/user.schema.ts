import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  user: string;

  @Prop()
  password: number;

  @Prop({ default: Date.now })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);
