import type { Material } from "@prisma/client";

export const numToReal = (num: number) => {
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const materialsDataHelper = (materials: Material[]) => {
  const filoPrice = 12;
  const veuSize = 13.7
  const multiplier = 2;
  const veusQtyPerDefinedMeter = 4;

  return materials.map(({ id, cod, name, value, qty }) => {
    const perMeter = value / veuSize;
    const veusPerMeter = perMeter * veusQtyPerDefinedMeter + filoPrice;
    const total = veusPerMeter * multiplier;

    return {
      id,
      cod,
      name,
      value: numToReal(value),
      qty,
      perMeter: numToReal(perMeter),
      veusPerMeter: numToReal(veusPerMeter),
      normalValue: numToReal(total),
      total: numToReal(total * 1.1),
    };
  })
}