-- CreateTable
CREATE TABLE "Addresses" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(255),
    "city" VARCHAR(255),
    "province" VARCHAR(255),
    "country" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
