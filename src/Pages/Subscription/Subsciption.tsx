import Lucide from "../../base-components/Lucide";

import Button from "../../base-components/Button";

import Table from "../../base-components/Table";

import { Link, useNavigate } from "react-router-dom";
function ListSubscription() {
  const navigate = useNavigate();
  const navigateAddSubscription = () => {
    // 👇️ navigate to /
    navigate("/addsubscription");
  };


  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Liste des Packs</h2>
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
                  Nom de Pack
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Nombre Story
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prix Pack TTC
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            <Table.Tr>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  1
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                Argent 
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  75
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  50.000 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                      
                <Link
                        className="flex items-center text-info mr-1 cursor-pointer"
                        to={`/update_subscription/:id`}
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1 " />
                        Modifier
                      </Link>
                    </div>
                </Table.Td>
              </Table.Tr>
            <Table.Tr>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  2
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                Bronze 
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  120
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  100.000 DT
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                      
                <Link
                        className="flex items-center text-info mr-1 cursor-pointer"
                        to={`/update_subscription/:id`}
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

export default ListSubscription;
