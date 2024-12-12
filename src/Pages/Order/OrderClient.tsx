
import Lucide from "../../base-components/Lucide";

import Table from "../../base-components/Table";

import { Link } from "react-router-dom";
function OrderClient() {

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Commande Clients</h2>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start"></div>
        <div id="divprod" className="t overflow-x-auto ">
          <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
          <Table.Thead className="th">
              <Table.Tr>
                <Table.Th className=" c text-center border-b-2 whitespace-nowrap">
                  N°
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Reference Commandes
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nom
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prénom
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Categorie
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Code story
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prix TTC
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Création
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Paiement
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
                  Ben Ali
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  Anis
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  Mariage
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  ST024
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  119.000 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  22-11-2024
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

export default OrderClient;
