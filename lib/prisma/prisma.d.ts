import { PrismaClient } from '../prisma/generated/client';
declare global {
    var prisma: PrismaClient | undefined;
}
declare let prismaClient: PrismaClient;
export default prismaClient;
