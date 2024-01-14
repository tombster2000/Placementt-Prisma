"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../prisma/generated/client");
let prismaClient;
if (process.env.NODE_ENV === 'production') {
    prismaClient = new client_1.PrismaClient();
}
else {
    //ensures only one client is created
    global.prisma = global.prisma || new client_1.PrismaClient();
    prismaClient = global.prisma;
}
exports.default = prismaClient;
//# sourceMappingURL=prisma.js.map