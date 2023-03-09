interface IConfig {
  port: number,
  databaseURL: string
  employeeService: string
  locationService: string
}
import * as dotenv from 'dotenv';
dotenv.config()
const configuaration = (): IConfig => {
  const { MONGODB_URL: databaseURL, PORT: port, EMPLOYEE_SERVICE: employeeService, LOCATION_SERVICE: locationService } = process.env;

  if (!databaseURL) throw new Error("Database URl is missing in .env")

  return {
    port: parseInt(port, 10) || 3000,
    databaseURL,
    employeeService,
    locationService
  }


};
export const config = configuaration()