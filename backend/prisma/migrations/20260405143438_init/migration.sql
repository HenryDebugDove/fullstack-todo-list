-- CreateTable
CREATE TABLE "modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "resources" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "moduleId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "resources_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "modules" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "moduleId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "priority" TEXT,
    "dueDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "todos_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "modules" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "modules_name_key" ON "modules"("name");
