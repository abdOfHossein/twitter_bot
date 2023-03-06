import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
.setTitle('Twitter Bot')
.setDescription('twitterb bot in nest.js')
.setVersion('1.0')
.build();
