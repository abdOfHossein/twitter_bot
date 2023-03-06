import { Injectable } from '@nestjs/common';
import { client } from "../../../config/twitter.config";

@Injectable()
export class TwitterService {


  async myInfo() {
    try {
      const result = await client.get(`/2/users/me`)
      console.log(`result myInfo => ${result}`);
      return result
    } catch (e) {
      console.log(e);
      throw e
    }
  }

  async findByUsername(username: string) {
    try {
      const result = await client.get(`/2/users/by/username/${username}`)
      console.log(`result findByUsername => ${result}`);
      return result
    } catch (e) {
      console.log(e);
      throw e
    }
  }

  async usersLiking(id_twitte: string) {
    try {
      const result = await client.get(`/2/tweets/${id_twitte}/liking_users`)
      console.log(`result usersLiking => ${result}`);
      return result
    } catch (e) {
      console.log(e);
      throw e
    }
  }

  async sendTwitte(text: string) {
    try {
      const result = await client.post('statuses/update', { status: text })
      console.log(`result sendTwitte => ${result}`);
      return result
    } catch (e) {
      console.log(e);
      throw e
    }
  }

}
