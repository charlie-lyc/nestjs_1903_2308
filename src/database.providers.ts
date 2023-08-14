import * as mongoose from 'mongoose';
import db from '../configs/db';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${db.username}:${db.password}@clusternestjs.6tvnpr1.mongodb.net/${db.database}?retryWrites=true&w=majority`,
      ),
  },
];
