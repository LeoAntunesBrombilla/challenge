import mongoose from 'mongoose';

type DBInput = {
  db: string;
};

const connect = async ({ db }: DBInput) => {
  try {
    mongoose.connect(db);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return process.exit(1);
  }
};

export default connect;
