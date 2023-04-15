import { ActionArgs, json } from "@remix-run/server-runtime";
import type { V2_MetaFunction } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { useForm } from "react-hook-form";
import TextField from "~/components/molecule/TextField";
import Table from "~/components/organism/Table";
import { createMaterial, getMaterials } from "~/models/material.server";
import { materialsDataHelper } from "~/helper/transformData";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export const loader = async () => {
  const materials = await getMaterials();

  return json({ materials });
};
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData) as any;

  body.cod = parseInt(body.cod);
  body.value = parseFloat(body.value);
  body.qty = parseInt(body.qty);

  const responseFromMaterial = await createMaterial(body);
  return false;
};

export default function Index() {
  // const user = useOptionalUser();
  //

  const { materials } = useLoaderData();
  const submit = useSubmit();
  const {
    register,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <main className="flex flex-col gap-4 p-8">
      <header className="flex justify-between">
        <h2 className="text-4xl font-medium">Materais para o véu</h2>
        <label htmlFor="adding-material" className="noprint btn-primary btn">
          Adicionar Material
        </label>
      </header>
      <Table data={materialsDataHelper(materials)} />
      <div>
        <input
          type="checkbox"
          id="adding-material"
          className="noprint modal-toggle"
        />
        <label htmlFor="adding-material" className="modal">
          <label className="modal-box relative gap-4" htmlFor="">
            <h2 className="text-4xl font-bold">Adicionando Material</h2>
            <Form method="POST" className="flex flex-col">
              <TextField
                label="Código"
                register={register("cod", { required: true })}
                placeholder="Cód. do Material"
                id="cod"
              />
              <TextField
                label="Nome"
                register={register("name", { required: true })}
                placeholder="Nome do Material"
                id="name"
              />
              <TextField
                label="Preço"
                type="number"
                register={register("value", { required: true })}
                placeholder="Preço do Material"
                id="value"
              />
              <TextField
                label="Quantidade"
                register={register("qty", { required: true })}
                placeholder="Quantidade do Material"
                id="qty"
              />
              <button
                className="btn-primary btn mt-4 self-end"
                type="submit"
                onClick={() => {
                  setTimeout(() => reset(), 100);
                }}
              >
                Adicionar
              </button>
            </Form>
          </label>
        </label>
      </div>
    </main>
  );
}
