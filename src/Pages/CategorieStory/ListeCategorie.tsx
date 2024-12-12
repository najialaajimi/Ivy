import Lucide from "../../base-components/Lucide";

import Button from "../../base-components/Button";
import { FormInput, FormSelect, FormSwitch } from "../../base-components/Form";

import { useEffect, useState } from "react";

import Table from "../../base-components/Table";

import { useNavigate } from "react-router-dom";

import Pagination from "../../base-components/Pagination";
import clsx from "clsx";
function ListeCategory() {


  const navigate = useNavigate();

  const navigateAjouterTags = () => {
    // 👇️ navigate to /
    navigate("/ajouter-category");
  };
  

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Liste des Categories</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button
            variant="primary"
            className="mr-2 shadow-md"
            onClick={navigateAjouterTags}
          >
            Ajouter Categorie
          </Button>
        </div>
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
                  Libelle
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
              
                <Table.Tr className="intro-x">
                  <Table.Td
                    data-label="Id"
                    className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                    <a href="" className=" font-medium whitespace-nowrap">
                      {1}
                    </a>
                  </Table.Td>
                  <Table.Td
                    data-label="Nom"
                    className="c first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                    Mariage
                  </Table.Td>
                  <Table.Td
                    data-label="Bloque"
                    className="c first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                  >
                    <div
                      className={clsx([
                        "flex items-center justify-center",
                        /* { "text-success": t?.etatmenu === true },
                        { "text-danger": t?.etatmenu === false }, */
                      ])}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {/* {t?.etatmenu === true ? "Activé" : "Désactivé"} */}Activé
                    </div>
                  </Table.Td>
                  <Table.Td className="c first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <FormSwitch className="flex  sm:justify-center">
                        <FormSwitch.Input
                          // onClick={toggle}
                          name="etatmenu"
                         /*  checked={t?.etatmenu}
                          onChange={(e: any) => {
                            handleChange(e, t?._id);
                          }} */
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
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default ListeCategory;
