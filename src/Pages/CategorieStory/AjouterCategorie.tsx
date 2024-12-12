import React, { useState, MouseEvent, useEffect } from "react";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import {
  FormInput,
  FormInline,
  FormLabel,
  FormHelp,
} from "../../base-components/Form";


function AjouterCategory() {
  
  return (
    <>
      <div className="flex items-center mt-1">
        <h2 className="mr-auto text-lg font-medium intro-y">Ajouter Categorie</h2>
      </div>

      

      <div className="py-10 mt-1 intro-y box sm:py-1">
        <div className="p-5 mt-1 intro-y box">
          <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Information
              du Categorie
            </div>
            <div className="mt-5">
              <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Libelle de Categorie</div>
                      <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </FormLabel>

                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    id="product-name"
                    name="libelle"
                  //  onChange={onChangeInput}
                    type="text"
                    placeholder="Libelle du categorie"
                    //value={cat?.libelle}
                  />
                </div>
              </FormInline>

            </div>
            <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
              <Button
                variant="secondary"
                className="w-24"
                onClick={() => {
              //    navigateCategorie();
                }}
              >
                Annuler
              </Button>

              <Button
                variant="primary"
                type="submit"
                className="w-26 ml-3"
                /* onClick={(e: any) => {
                  const { libelle } = cat;
                  if (libelle == "") {
                    SetValidelibelle(true);
                    toast.error(
                      <b>
                        s'il vous plait veuillez saisir tous les champs
                        obligatoires{" "}
                      </b>
                    );
                    return false;
                  } else {
                    AjouterSubmit(e);
                  }
                }} */
              >
                Ajouter Categorie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AjouterCategory;
