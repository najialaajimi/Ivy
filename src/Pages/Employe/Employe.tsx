import Lucide from "../../base-components/Lucide";

import Button from "../../base-components/Button";
import {  FormSelect, FormSwitch } from "../../base-components/Form";

import {  useState } from "react";

import Table from "../../base-components/Table";

import Pagination from "../../base-components/Pagination";

function ListEmploye() {
  const [index, SetIndex] = useState(0);
  const [View1, SetView1] = useState(true);
  const [View2, SetView2] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;

    SetIndex(parseInt(element.value));
  };


  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Employe</h2>
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
                  Nom
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Prénom
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  E-mail
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  N° Téléphone
                </Table.Th>
                <Table.Th className=" c text-center border-b-2 whitespace-nowrap">
                  Status
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
                  wh
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  wahid
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  wahid.wh@gmail.com
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  25885010
                </Table.Td>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  Active
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                      <FormSwitch className="flex  sm:justify-center">
                        <FormSwitch.Input
                          // onClick={toggle}
                          name="etat"
                          className="ml-3 mr-0 "
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                </Table.Td>
              </Table.Tr>
            <Table.Tr>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  2
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  Ah
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  ahmed
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  ahmed@gmail.com
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                  25885011
                </Table.Td>
                <Table.Td className=" c text-center border-b-2 whitespace-nowrap">
                  Active
                </Table.Td>
                <Table.Td className="c text-center border-b-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                      <FormSwitch className="flex  sm:justify-center">
                        <FormSwitch.Input
                          // onClick={toggle}
                          name="etat"
                          className="ml-3 mr-0 "
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </div>
        <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            {View1 && (
              <>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>

                <Pagination.Link>
                  <button value={1} onClick={handleClick}>
                    1
                  </button>
                </Pagination.Link>
                <Pagination.Link>
                  <button value={2} onClick={handleClick}>
                    2
                  </button>
                </Pagination.Link>
                <Pagination.Link>
                  <button value={3} onClick={handleClick}>
                    3
                  </button>
                </Pagination.Link>

                <Pagination.Link>
                  <Lucide
                    icon="ChevronRight"
                    className="w-4 h-4"
                    onClick={() => {
                      SetView1(false);
                      SetView2(true);
                      SetIndex(4);
                    }}
                  />
                </Pagination.Link>
              </>
            )}

            {View2 && (
              <>
                <Pagination.Link>
                  <Lucide
                    icon="ChevronLeft"
                    className="w-4 h-4"
                    onClick={() => {
                      SetView1(true);
                      SetView2(false);
                    }}
                  />
                </Pagination.Link>

                <Pagination.Link>
                  <button value={4} onClick={handleClick}>
                    4
                  </button>
                </Pagination.Link>
                <Pagination.Link>
                  <button value={5} onClick={handleClick}>
                    5
                  </button>
                </Pagination.Link>
                <Pagination.Link>
                  <button value={6} onClick={handleClick}>
                    6
                  </button>
                </Pagination.Link>

                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
              </>
            )}
          </Pagination>
          <FormSelect
            className="w-20 mt-3 !box sm:mt-0"
           // onChange={onChangeSelectpagination}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </FormSelect>
        </div>
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default ListEmploye;
