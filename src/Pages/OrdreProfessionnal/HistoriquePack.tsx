
import Lucide from "../../base-components/Lucide";

import Table from "../../base-components/Table";

import { Link, useNavigate } from "react-router-dom";
function HistoriquePack() {
  const navigate = useNavigate();


  const exportToExcel = async () => {
    try {
      // Ici on va faire l'envoie des données au serveur
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
      <div className="flex flex-col items-center intro-y sm:flex-row">
        <p className="mr-3 px-3 py-3 font-medium text-center text-white rounded-md bg-primary cursor-pointer">
        Historique des Packs Mensuel
        </p>

        <p
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
          onClick={() => {
            navigate("/historique_packs_last_month");
          }}
        >
          Historique des Packs mois dernier
        </p>
        <p
          onClick={() => {
            navigate("/historique_packs");
          }}
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
        >
          Historique des Packs
        </p>
        <div className=" ml-auto flex w-full mt-4 sm:w-auto sm:mt-0">
          <p
            className="mr-3 px-3 py-3   font-medium text-center text-white rounded-md bg-primary cursor-pointer"
            onClick={exportToExcel}
          >
            {" "}
            Exporter vers Excel
          </p>
        </div>
      </div>
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start"></div>
        <div id="divprod" className="t overflow-x-auto ">
          <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
          <Table.Thead className="th">
              <Table.Tr>
                <Table.Th className=" c text-center border-b-2 whitespace-nowrap">
                  N°
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Reference
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nom de pack
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prix Pack HT
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  TVA (19%)
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prix Pack TTC
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Points
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Etoile
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Création
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            <Table.Tr>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  1
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                234232
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  STANDARD
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  101.300 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  19.247 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  120.547 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  120
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  150
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  22-11-2024
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </div>
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default HistoriquePack;
