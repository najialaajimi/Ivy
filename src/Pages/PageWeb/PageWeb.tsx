import Lucide from "../../base-components/Lucide";

import Button from "../../base-components/Button";
import {  FormSelect, FormSwitch } from "../../base-components/Form";

import {  useState } from "react";

import Table from "../../base-components/Table";

import Pagination from "../../base-components/Pagination";
import { Link } from "react-router-dom";

function ListPageWeb() {
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
        <h2 className="mr-auto text-lg font-medium">Liste des Pages web</h2>
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
                  Titre
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  Description
                </Table.Th>
                <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            <Table.Tr>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                  1
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                  A Propos
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                  Presentation CV ....
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                    <div className="flex items-center justify-center">
                      <Link
                        className="flex items-center text-info mr-1 cursor-pointer"
                        to={`/pages/:id`}
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1 " />
                        Modifier
                      </Link>
                    </div>
                  </Table.Td>
              </Table.Tr>
            <Table.Tr>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                  2
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                conditions générales de vente
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                Quels sont les princ ....
                </Table.Td>
                <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                    <div className="flex items-center justify-center">
                      <Link
                        className="flex items-center text-info mr-1 cursor-pointer"
                        to={`/pages/:id`}
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

export default ListPageWeb;
