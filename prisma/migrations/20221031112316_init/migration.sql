-- CreateTable
CREATE TABLE "Buyers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Twitterusername" TEXT NOT NULL,
    "DiscordUsername" TEXT NOT NULL,
    "DiscordInvite" TEXT NOT NULL,
    "DiscordBot" TEXT NOT NULL,
    "Reference" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
