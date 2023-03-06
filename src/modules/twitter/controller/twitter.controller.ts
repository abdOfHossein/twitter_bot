import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SendTwitteDto } from '../dto/send-twitte.dto';
import { TwitterService } from '../service/twitter.service';

@Controller('twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) { }
  
  @Get('/users/my/info')
  async myInfo() {
    await this.twitterService.myInfo()
  }
  @Get('/find/user/by/username')
  async findByUsername(@Query('username') username: string) {
    await this.twitterService.findByUsername(username)
  }

  @Get('/users/liking')
  async usersLiking(@Query('id_twitte') id_twitte: string) {
    await this.twitterService.usersLiking(id_twitte)
  }

  @Post('/send/twitte')
  async sendTwitte(@Body() sendTwitteDto: SendTwitteDto) {
    await this.twitterService.sendTwitte(sendTwitteDto.text)
  }

}
