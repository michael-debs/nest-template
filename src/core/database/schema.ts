import { UserSchema } from 'src/modules/users/entities/user.entity';

export const schema = {
  UserSchema: typeof UserSchema,
};
export type Schema = typeof schema;
