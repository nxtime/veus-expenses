import type { Material } from '@prisma/client';

import { prisma } from '~/db.server';

export type { Material } from '@prisma/client';

export function getMaterials(): Promise<Material[]> {
  return prisma.material.findMany();
}

export function getMaterial(id: number): Promise<Material | null> {
  return prisma.material.findUnique({
    where: { id },
  });
}

export function createMaterial(data: Omit<Material, 'id'>): Promise<Material> {
  console.log("Got it here: ", data);
  console.log("Prisma material: ", prisma.material)
  return prisma.material.create({
    data,
  });
}

export function updateMaterial(
  id: number,
  data: Omit<Material, 'id'>
): Promise<Material> {
  return prisma.material.update({
    where: { id },
    data,
  });
}

export function deleteMaterial(id: number): Promise<Material> {
  return prisma.material.delete({
    where: { id },
  });
}