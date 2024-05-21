"use client";

import { Button, Card, Modal, Label, TextInput,Spinner } from "flowbite-react";
import { useState, useEffect } from "react";




export default function Home() {

  const [numero, setNumero] = useState(0);
  const [uno, setUno] = useState(16);
  const [dos, setDos] = useState(16);
  const [tres, setTres] = useState(17);
  const [cuatro, setCuatro] = useState(17);
  const [cinco, setCinco] = useState(17);
  const [seis, setSeis] = useState(17);
  const [lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);

  const generarProbabilidad = () => {
    setLista([])
    let total = uno + dos + tres + cuatro + cinco + seis;
    console.log(total);
    if (total !== 100) {
      alert("La suma de las probabilidades debe ser 100");
      return;
    }

    for (let i = 0; i < uno; i++) {
      setLista((prev) => [...prev, 1]);
    }
    for (let i = 0; i < dos; i++) {
      setLista((prev) => [...prev, 2]);
    }
    for (let i = 0; i < tres; i++) {
      setLista((prev) => [...prev, 3]);
    }
    for (let i = 0; i < cuatro; i++) {
      setLista((prev) => [...prev, 4]);
    }

    for (let i = 0; i < cinco; i++) {
      setLista((prev) => [...prev, 5]);
    }
    for (let i = 0; i < seis; i++) {
      setLista((prev) => [...prev, 6]);
    }

    setOpenModal(false);

  }

  const generarNumero = () => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    let random = Math.floor(Math.random() * lista.length);
    console.log(random);
    setNumero(lista[random]);

  }

  useEffect(() => {
    generarProbabilidad()
  }
    , [])




  return (

    <main className="flex  flex-col items-center justify-center p-24">
      <Card className="max-w-sm">
        <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          LANZADOR DE DADOS 100% LEGAL
        </h5>

        <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {loading ? <Spinner /> : numero}
        </h5>
        <Button
          className="w-full"
          onClick={generarNumero}

        >
          GENERAR
        </Button>
        <button
          className="opacity-0 "
          onClick={() => {
            setOpenModal(true);
            console.log(openModal)
          }}
        >
          Botón oculto
        </button>
      </Card>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}

      >

        <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          CONFIGURACION DE PROBABILIDAD
        </h5>
        <form className="grid grid-cols-2 gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero1" value="numero 1" />
            </div>
            <TextInput id="numero1" type="number"
              value={uno}
              onChange={(e) => setUno(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero2" value="numero 2" />
            </div>
            <TextInput id="numero2" type="number"
              value={dos}
              onChange={(e) => setDos(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero3" value="numero 3" />
            </div>
            <TextInput id="numero3" type="number"
              value={tres}
              onChange={(e) => setTres(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero4" value="numero 4" />
            </div>
            <TextInput id="numero4" type="number"
              value={cuatro}
              onChange={(e) => setCuatro(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero5" value="numero 5" />
            </div>
            <TextInput id="numero5" type="number"
              value={cinco}
              onChange={(e) => setCinco(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numero6" value="numero 6" />
            </div>
            <TextInput id="numero6" type="number"
              value={seis}
              onChange={(e) => setSeis(Number(e.target.value))}
            />
          </div>

          <Button
            className="col-span-2"
            onClick={() => {
              
              generarProbabilidad();
            }}
          >GENERAR PROBABILIDAD</Button>
        </form>
      </Modal>

    </main>


  );
}
