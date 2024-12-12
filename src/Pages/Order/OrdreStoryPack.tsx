
import Lucide from "../../base-components/Lucide";

import Table from "../../base-components/Table";

import { Link , useNavigate} from "react-router-dom";
function OrdreStoryPack() {
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
        Commande Client Mensuel
        </p>

        <p
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
          onClick={() => {
            navigate("/historique_packs_last_month");
          }}
        >
          Commande Client mois dernier
        </p>
        <p
          onClick={() => {
            navigate("/historique_packs");
          }}
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
        >
          Historique Commande Client
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
                  Reference Commande
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nom Client
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prenom Client
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nom de Pack
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nombre de story
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prix
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Création
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Paiement
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Action
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
                  Ben Salem
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  Salem
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  LUX
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  5
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  90.000 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  22-11-2024
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  22-11-2024
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                      
                      <Link
                              className="flex items-center text-info mr-1 cursor-pointer"
                              to={`/update_order/:id`}
                            >
                              <Lucide icon="CheckSquare" className="w-4 h-4 mr-1 " />
                              Modifier
                            </Link>
                          </div>
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

export default OrdreStoryPack;
