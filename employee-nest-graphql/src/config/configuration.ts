interface IConfig{
  port:number,
  databaseURL:string
}

const configuaration=():IConfig=>{
  const databaseURL=process.env.MONGODB_URL;
  if(!databaseURL) throw new Error("Database URl is missing in .env")

  return  {
    port: parseInt(process.env.PORT, 10) || 3000,
    databaseURL: process.env.MONGODB_URL
   }


  };
  export default configuaration