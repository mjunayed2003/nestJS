import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient 
implements OnModuleInit, OnModuleDestroy{
    onModuleInit() {
        throw new Error("Method not implemented.");
    }
    async onModuleDestroy() {
        await this.$connect();
    }
    async enableShutdownHooks(){
        await this.$disconnect();
    }
}