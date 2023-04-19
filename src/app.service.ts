import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello (): string {
    return 'saludos desde info games!'
  }
}
