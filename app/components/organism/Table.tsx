const Heading: {
  id: number;
  key:
    | "cod"
    | "name"
    | "value"
    | "qty"
    | "perMeter"
    | "veusPerMeter"
    | "normalValue"
    | "total";
  label: string;
}[] = [
  {
    id: 1,
    key: "cod",
    label: "Código",
  },
  {
    id: 2,
    key: "name",
    label: "Nome",
  },
  {
    id: 3,
    key: "value",
    label: "Preço",
  },
  {
    id: 4,
    key: "qty",
    label: "Quantidade",
  },
  {
    id: 5,
    key: "perMeter",
    label: "Por metro",
  },
  {
    id: 6,
    key: "veusPerMeter",
    label: "Véus por metro",
  },
  {
    id: 8,
    key: "normalValue",
    label: "Preço normal",
  },
  {
    id: 7,
    key: "total",
    label: "Total (+10%)",
  },
];

const Table = ({
  data,
}: {
  data: {
    id: number;
    cod: number;
    name: string;
    value: string;
    qty: number;
    perMeter: string;
    veusPerMeter: string;
    normalValue: string;
    total: string;
  }[];
}) => {
  return (
    <table className="table-zebra table w-full">
      <thead>
        <tr>
          {Heading.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Heading.map((head) => (
              <td key={head.id}>{item[head.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {data.length === 0 && (
        <tr>
          <td className="text-center" colSpan={Heading.length}>
            Nenhum item encontrado
          </td>
        </tr>
      )}
    </table>
  );
};

export default Table;
