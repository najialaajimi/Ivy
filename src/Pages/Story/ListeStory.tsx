import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import _ from "lodash";
import TomSelect from "../../base-components/TomSelect";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Table from "../../base-components/Table";
import {
  FormInput,
  FormInline,
  FormSelect,
  FormLabel,
  FormTextarea,
  FormSwitch,
} from "../../base-components/Form";

import Tippy from "../../base-components/Tippy";

import Pagination from "../../base-components/Pagination";
import clsx from "clsx";

function ListStory() {
  
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const navigateAjouterProduit = () => {
    // 👇️ navigate to /

        navigate("/add-story")
    }
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Produits</h2>

        <div className="flex w-auto mt-4  sm:mt-0">
          <p
            className="mr-3 px-3 py-3   font-medium text-center text-white rounded-md bg-primary cursor-pointer"
            onClick={() => {
              //exportToExcel();
            }}
          >
            {" "}
            Exporter vers Excel
          </p>
          <Button
            variant="primary"
            className="mr-2 shadow-md "
            onClick={navigateAjouterProduit}
          >
            Ajouter Story
          </Button>
        </div>
      </div>

      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form
            id="tabulator-html-filter-form"
            className="xl:flex  sm:mr-auto"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="items-center xl:flex sm:flex sm:mr-4">
              <FormInput
                id="searcheNom"
                name="searcheNom"
                onChange={(text) => {
                 // searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="Nom de Produit..."
              />
            </div>
            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <FormInput
                id="searcheRef"
                name="searcheRef"
                onChange={(text) => {
                 // searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="référence..."
              />
            </div>
            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <FormInput
                id="categorie"
                name="categorie"
                onChange={(text) => {
                 // searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="Categorie..."
              />
            </div>

            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <FormInput
                id="prixHt"
                name="prixHt"
                onChange={(text) => {
                 // searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="Prix Ht..."
              />
            </div>
            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <FormInput
                id="prixTTCDis"
                name="prixTTCDis"
                onChange={(text) => {
                //  searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="Prix TTC Dis..."
              />
            </div>
            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <FormInput
                id="points"
                name="points"
                onChange={(text) => {
                //  searchFilterFunction(text);
                }}
                type="text"
                className="mt-2 w-full sm:w-full 2xl:w-full xl:w-full  lg:w-full sm:mt-0"
                placeholder="Points..."
              />
            </div>
          </form>
        </div>

        <div id="divprod">
          <Table className=" border-spacing-y-[10px]  border-separate sm:mt-2 overflow-x-auto ">
            <Table.Thead className="th">
              <Table.Tr>
                <Table.Th className="  border-b-2 whitespace-nowrap">
                  N°
                </Table.Th>
                <Table.Th className=" border-b-2 whitespace-nowrap">
                Référence Code
                </Table.Th>
                <Table.Th className="  border-b-2 whitespace-nowrap">
                  Déscription
                </Table.Th>
                <Table.Th className="border-b-2 whitespace-nowrap">
                  Photo
                </Table.Th>
                <Table.Th className="border-b-2 whitespace-nowrap">
                  Remise
                </Table.Th>
                <Table.Th className=" text-center border-b-2 whitespace-nowrap">
                  Prix
                </Table.Th>
                <Table.Th className=" text-center border-b-2 whitespace-nowrap">
                  STATUS
                </Table.Th>
                <Table.Th className=" text-center border-b-2 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((p: any, i: any) => (
                <Table.Tr key={i} className="intro-x">
                  <Table.Td
                    data-label="Id"
                    className="  first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    <a href="" className="font-medium whitespace-nowrap">
                      {i + 1}
                    </a>
                  </Table.Td>
                  <Table.Td
                    data-label="Nom"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.nom}
                  </Table.Td>

                  <Table.Td
                    data-label="photo"
                    className=" first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    <div className="flex">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                         // src={process.env.API_URL + p?.photo}
                        />
                      </div>
                    </div>
                  </Table.Td>

                  <Table.Td
                    data-label="Reference"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.reference}
                  </Table.Td>

                  <Table.Td
                    data-label="isSpecial"
                    className=" first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    <div
                      className={clsx([
                        "flex items-center justify-center",
                        { "text-success": p?.isSpecial === true },
                        { "text-danger": p?.isSpecial === false },
                      ])}
                    >
                      {p.isSpecial === true ? "Spécial" : "Normal"}
                    </div>
                  </Table.Td>

                  <Table.Td
                    data-label="Categorie"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.categorie?.libelle}
                  </Table.Td>

                  <Table.Td
                    data-label="Prix HT"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.prix_HT?.$numberDecimal}
                  </Table.Td>
                  <Table.Td
                    data-label="Remise"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.remise} %
                  </Table.Td>
                  <Table.Td
                    data-label="Prix Apres Remise"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.prix_Ht_apre_remise?.$numberDecimal || 0}
                  </Table.Td>
                  <Table.Td
                    data-label="TVA"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.tva?.valeur} %
                  </Table.Td>
                  <Table.Td
                    data-label="Prix TTc"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.prix_TTC_catalogue?.$numberDecimal || 0}
                  </Table.Td>

                  <Table.Td
                    data-label="Prix TTc"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.prix_TTC_c_achat?.$numberDecimal || 0}
                  </Table.Td>
                  <Table.Td
                    data-label="Point Produit"
                    className=" first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    {p?.point_Produit}
                  </Table.Td>

                  <Table.Td
                    data-label="Status"
                    className=" first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]"
                  >
                    <div
                      className={clsx([
                        "flex items-center justify-center",
                        { "text-success": p?.en_Stocke === "en_stock" },
                        { "text-danger": p?.en_Stocke === "hors_Stock" },
                      ])}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {p.en_Stocke === "en_stock" ? "en_stock" : "hors_Stock"}
                    </div>
                  </Table.Td>

                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#E5E7E6]">
                    <div className="flex items-center justify-center">
                      <p
                        className="flex items-center text-info mr-3 cursor-pointer"
                        onClick={() => {
                          /* handleOpen();
                          getProduit(p?._id); */
                        }}
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1 " />
                        Modifier
                      </p>

                      <p
                        className="flex items-center  cursor-pointer"
                        onClick={() => {
                          //updateEtatProduit(p?._id);
                        }}
                      >
                        {p.en_Stocke === "en_stock" ? (
                          <>
                            <Lucide
                              icon="Lock"
                              className="text-danger w-4 h-4 mr-1"
                            />
                            <label className="text-danger ">Désactiver</label>
                          </>
                        ) : (
                          <>
                            <Lucide
                              icon="Unlock"
                              className=" text-primary w-4 h-4 mr-1"
                            />
                            <label className="text-primary ">Activer</label>
                          </>
                        )}
                      </p>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
        {/* <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            {View1Pagination && (
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
                      SetView1Pagination(false);
                      SetView2Pagination(true);
                      SetIndex(4);
                    }}
                  />
                </Pagination.Link>
              </>
            )}

            {View2Pagination && (
              <>
                <Pagination.Link>
                  <Lucide
                    icon="ChevronLeft"
                    className="w-4 h-4"
                    onClick={() => {
                      SetView1Pagination(true);
                      SetView2Pagination(false);
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
            onChange={onChangeSelectpagination}
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={150}>150</option>
            <option value={200}>200</option>
            <option value={250}>250</option>
          </FormSelect>
        </div> */}
      </div>

      {/* END: HTML Table Data */}
    </>
  );
}

export default ListStory;
