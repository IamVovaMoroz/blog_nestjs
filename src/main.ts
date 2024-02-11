if(!process.env.IS_TS_NODE){
  require("module-alias/register")
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Server is running on port 3000');
}
bootstrap();
