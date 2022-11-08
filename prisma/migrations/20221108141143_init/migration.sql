-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Buyer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Twitterusername" TEXT NOT NULL,
    "DiscordUsername" TEXT NOT NULL,
    "DiscordInvite" TEXT NOT NULL,
    "DiscordBot" TEXT,
    "Reference" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Buyer" ("DiscordBot", "DiscordInvite", "DiscordUsername", "Reference", "Twitterusername", "createdAt", "id") SELECT "DiscordBot", "DiscordInvite", "DiscordUsername", "Reference", "Twitterusername", "createdAt", "id" FROM "Buyer";
DROP TABLE "Buyer";
ALTER TABLE "new_Buyer" RENAME TO "Buyer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
