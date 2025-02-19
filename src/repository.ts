import { createClient, RedisClientType } from 'redis';

export class RedisClient {

    clientRedis: RedisClientType;

    public constructor() {
        this.clientRedis = createClient({
            password: process.env.REDIS_PASSWORD,
            socket: {
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT || '6379', 10)
            }
        });
    }
    
    public async setRedis(data: any) {
        await this.clientRedis.sAdd(`${data.userId}`, JSON.stringify(data));
    }
    
    public async getRedis(userId: string) {
        const events = [];
        const result = await this.clientRedis.sMembers(userId);
        for (let index = 0; index < 10; index++) {
            events[index] = JSON.parse(result[index]);
            
        } 
        return events;
    }
};