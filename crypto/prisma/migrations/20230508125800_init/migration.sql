-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cryptoName" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "transactionType" TEXT NOT NULL
);
