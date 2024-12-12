
import Table from "../../base-components/Table";

import { Link , useNavigate} from "react-router-dom";

function BonusStar() {
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
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Liste Bonus Etoiles</h2>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
      <div className="flex flex-col items-center intro-y sm:flex-row">
        <p className="mr-3 px-3 py-3 font-medium text-center text-white rounded-md bg-primary cursor-pointer">
        Bonus Etoiles Mensuel
        </p>

        <p
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
          onClick={() => {
            navigate("/historique_packs_last_month");
          }}
        >
          Bonus Etoiles mois dernier
        </p>
        <p
          onClick={() => {
            navigate("/historique_packs");
          }}
          className=" mr-3 px-3 py-3 font-medium  rounded-md  cursor-pointer"
        >
          Historique Bonus Etoiles
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
                  Nom Pro
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prenom Pro
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nombre Etoile
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Pack Cadeaux
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Date de Transfére
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            <Table.Tr>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  1
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                ben salem
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  ahmed
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  100
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  Basic
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

export default BonusStar;
