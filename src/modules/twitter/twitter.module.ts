import { Module } from '@nestjs/common';
import { TwitterService } from './service/twitter.service';
import { TwitterController } from './controller/twitter.controller';

@Module({
  controllers: [TwitterController],
  providers: [TwitterService]
})
export class TwitterModule {}
