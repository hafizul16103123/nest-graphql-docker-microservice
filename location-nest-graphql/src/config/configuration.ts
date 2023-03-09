interface IConfig {
  port: number,
  databaseURL: string
}
import * as dotenv from 'dotenv';
dotenv.config()
const configuaration = (): IConfig => {
  const { MONGODB_URL: databaseURL, PORT: port } = process.env;

  if (!databaseURL) throw new Error("Database URl is missing in .env")

  return {
    port: parseInt(port, 10) || 3000,
    databaseURL: databaseURL
  }


};
export const config = configuaration()