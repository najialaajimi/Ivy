import Button from "../../base-components/Button";
import { useState, MouseEvent, useEffect } from "react";

import _ from "lodash";

import Lucide from "../../base-components/Lucide";

import { Routes, Route, useNavigate } from "react-router-dom";
import {
  FormInput,
  FormInline,
  FormSelect,
  FormLabel,
  FormHelp,
  FormTextarea,
  FormSwitch,
} from "../../base-components/Form";

function AjouterStory() {
  const navigate = useNavigate();
  let [viewImage, SetViewImage] = useState(false);
  const [View1, SetView1] = useState(true);
  const [View2, SetView2] = useState(false);

  const [View4, SetView4] = useState(false);
  const [View5, SetView5] = useState(false);

  {
    /* validation de champ */
  }
  const [validenom, SetValideNom] = useState(false);
  const [validReference, SetValideReference] = useState(false);
  const [valideDescription, SetValideDescription] = useState(false);
  const [valideCategorie, SetValideCategorie] = useState(false);
  const [valideCodeBare, SetValideCodeBare] = useState(false);

  const [validePoint, SetValidePoint] = useState(false);

  const [valideRemise, setValideRemise] = useState(false);

  const [valideTva, SetValideTVa] = useState(false);
  const [ValidePrix, SetValidePrix] = useState(false);

  const [Categories, SetCategories] = useState([]);

  const [PrixTTC, SetPrixTTC] = useState(0);
  const [prixTTC_Catalogue, SetPrixTTC_Catalogue] = useState(0);
  const [Prixremise, SetPrixRemise] = useState(0);
  const [Tvas, SetTvas] = useState([]);
  const [valeurTVA, SetValeurTVA] = useState(0);
  const [file, setFile] = useState<File>();
  const [checked, setChecked] = useState(false);
 

  const AjouterSubmit = async (e: MouseEvent) => {
   
  };

  return (
    <>
      <div className="flex items-center mt-8">
        <h2 className="mr-auto text-lg font-medium intro-y">Ajouter Produit</h2>
      </div>
      {/* BEGIN: Wizard Layout */}
      <div className="z-10 flex items-center rigth-3 flex-1  ">

      </div>
      <div className="py-10 mt-5 intro-y box sm:py-20">
        <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
          <div className="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
            {View1 ? (
              <>
                <Button variant="primary" className="w-10 h-10 rounded-full">
                  1
                </Button>
                <div className="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                  Information de produit
                </div>
              </>
            ) : (
              <>
                <Button
                  className="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
                  onClick={() => {
                    SetView1(true);
                    SetView2(false);

                    SetView4(false);
                    SetView5(false);
                  }}
                >
                  1
                </Button>
                <div className="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                  Information de produit
                </div>
              </>
            )}
          </div>
          <div className="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
            {View2 ? (
              <>
                <Button variant="primary" className="w-10 h-10 rounded-full">
                  2
                </Button>
                <div className="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                  Categorie de produit
                </div>
              </>
            ) : (
              <>
                <Button
                  className="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
                  onClick={() => {
                   
                  }}
                >
                  2
                </Button>
                <div className="ml-3 text-base  lg:w-28 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                  Categorie de produit
                </div>
              </>
            )}
          </div>

          <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            {View4 ? (
              <>
                <Button variant="primary" className="w-10 h-10 rounded-full">
                  3
                </Button>
                <div className="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                  Ajouter Photo produit
                </div>
              </>
            ) : (
              <>
                <Button
                  className="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
                  onClick={() => {
                    SetView1(false);
                    SetView2(false);

                    SetView4(true);
                    SetView5(false);
                  }}
                >
                  3
                </Button>
                <div className="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                  Ajouter Photo Produit
                </div>
              </>
            )}
          </div>
          <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            {View5 ? (
              <>
                <Button variant="primary" className="w-10 h-10 rounded-full">
                  4
                </Button>
                <div className="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                  Prix et Points Produit
                </div>
              </>
            ) : (
              <>
                <Button
                  className="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
                  onClick={() => {
                    SetView1(false);
                    SetView2(false);

                    SetView4(false);
                    SetView5(true);
                  }}
                >
                  4
                </Button>
                <div className="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                  Prix et Points Produit
                </div>
              </>
            )}
          </div>
        </div>
        {View1 && (
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                Information de produit
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSwitch className="flex  sm:justify-center">
                      <FormSwitch.Label htmlFor="special">
                        Produit Spécial
                      </FormSwitch.Label>
                      <FormSwitch.Input
                        id="special"
                        // onClick={toggle}
                        name="isSpecial"/* 
                        checked={checked}
                        //onChange={handleChange} */
                        className="ml-3 mr-0"
                        type="checkbox"
                      />
                    </FormSwitch>
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">nom de produit</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Obligatoire
                        </div>
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="product-name"
                      name="nom"
                      //onChange={onChangeInput}
                      type="text"
                      placeholder="Nom de produit"
                      //value={produit?.nom}
                    />
                    {validenom && (
                      <FormHelp className="text-right text-danger">
                        champ obligatoire
                      </FormHelp>
                    )}
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Référence de produit</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Obligatoire
                        </div>
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="product-name"
                      name="reference"
                      //onChange={onChangeInput}
                      type="text"
                      //value={produit?.reference}
                      placeholder="Référence de produit"
                    />
                    {validReference && (
                      <FormHelp className="text-right text-danger">
                        champ obligatoire
                      </FormHelp>
                    )}
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">
                          Description de produit
                        </div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    {/* <ClassicEditor
           name='reference'
           //onChange={onChangeInput}
         /> */}
                    <FormTextarea
                      id="product-name"
                      name="description"
                      // //onChange={onChangeInput}
                      //onChange={onChangeInputArea}
                      //value={produit?.description}
                      placeholder="Description de produit"
                    />
                    {valideDescription && (
                      <FormHelp className="text-right text-danger">
                        champ obligatoire
                      </FormHelp>
                    )}
                  </div>
                </FormInline>
              </div>
              <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
                <Button
                  variant="secondary"
                  className="w-24"
                  onClick={() => {
                    //navigatetoProduits();
                  }}
                >
                  Annuler
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-24 ml-2"
                  onClick={() => {
                   
                  }}
                >
                  suivant
                </Button>
              </div>
            </div>
          </div>
        )}

        {View2 && (
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Categorie
                de produit
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Categorie</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Obligatoire
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSelect
                      id="category"
                      //onChange={onChangeSelect}
                      name="categorie"
                      //value={produit?.categorie}
                    >
                      <option value={""}>sélectionnez une catégorie</option>
                      {Categories?.map((item: any, i: any) => (
                        <option key={i} value={item?._id}>
                          {item?.libelle}
                        </option>
                      ))}
                    </FormSelect>
                    {valideCategorie && (
                      <FormHelp className="text-right text-danger">
                        champ obligatoire
                      </FormHelp>
                    )}
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Quantité Minimale</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Obligatoire
                        </div>
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="Quantite_alerte"
                      name="Quantite_alerte"
                      //onChange={onChangeInput}
                      type="number"
                      //value={produit?.Quantite_alerte}
                      placeholder="Quantité Minimale"
                      step={5}
                      min={0}
                    />
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">code a bare </div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Obligatoire
                        </div>
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="code_barre"
                      name="code_barre"
                      //onChange={onChangeInput}
                      type="text"
                      //value={produit?.code_barre}
                      placeholder="code a bare"
                    />
                    {valideCodeBare && (
                      <FormHelp className="text-right text-danger">
                        champ obligatoire
                      </FormHelp>
                    )}
                  </div>
                </FormInline>
              </div>
              <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
                <Button
                  variant="secondary"
                  className="w-24"
                  onClick={() => {
                    //navigatetoProduits();
                  }}
                >
                  Annuler
                </Button>
                <Button
                  variant="secondary"
                  className="w-24 ml-3"
                  onClick={() => {
                    SetView1(true);
                    SetView2(false);
                    SetView4(false);
                  }}
                >
                  Précédent
                </Button>
                <Button
                  variant="primary"
                  className="w-24 ml-2"
                  onClick={() => {
                    
                  }}
                >
                  suivant
                </Button>
              </div>
            </div>
          </div>
        )}

        {View4 && (
          <div className="p-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Ajouter
                Photo produit
              </div>
              <FormInline className="flex-col items-start mt-10 xl:flex-row">
                <FormLabel className="w-full xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium"> Photo de Produit</div>
                      <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Obligatoire
                      </div>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                  </div>
                </FormLabel>
                <div className=" flex-1 flex-col justify-center items-center mt-2 xl:justify-center">
                  {viewImage ? (
                    <>
                      <div className="relative col-span-12 cursor-pointer md:col-span-2 h-28 image-fit zoom-in">
                        <img
                          className="rounded-xl"
                          alt="image Page"
                          /* src={
                            process.env.API_URL +
                            "/images/produit/" +
                            produit?.photo
                          } */
                        />
                      </div>
                      <div className="flex flex-col w-full items-center justify-center xl:justify-end pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                        <div className=" flex-1 flex-col  items-center mt-2 xl:flex-col">
                          <FormInput
                            type="file"
                            id="avatar"
                            name="files"
                            className="mt-3 "
                            //onChange={onChangeInputFile}
                          />
                        </div>

                        <Button
                          variant="primary"
                          className="w-24 ml-2  mt-3 mb-3"
                         // onClick={handleUploadClick}
                        >
                          Télécharger
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col w-full items-center justify-center xl:justify-end pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                      <div className=" flex-1 flex-col  items-center mt-2 xl:flex-col">
                        <FormInput
                          type="file"
                          id="avatar"
                          name="files"
                          className="mt-3 "
                          //onChange={onChangeInputFile}
                        />
                      </div>

                      <Button
                        variant="primary"
                        className="w-24 ml-2  mt-3 mb-3"
                       // onClick={handleUploadClick}
                      >
                        Télécharger
                      </Button>
                    </div>
                  )}
                </div>
              </FormInline>
              <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
                <Button
                  variant="secondary"
                  className="w-24"
                  onClick={() => {
                    //navigatetoProduits();
                  }}
                >
                  Annuler
                </Button>
                <Button
                  variant="secondary"
                  className="w-24 ml-3"
                  onClick={() => {
                    SetView1(false);
                    SetView2(true);

                    SetView4(false);
                  }}
                >
                  Précédent
                </Button>
                <Button
                  variant="primary"
                  className="w-24 ml-2"
                  onClick={() => {
                    SetView1(false);
                    SetView2(false);

                    SetView4(false);
                    SetView5(true);
                  }}
                >
                  suivant
                </Button>
              </div>
            </div>
          </div>
        )}

        {View5 && (
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Prix et
                Points Produit
              </div>
              <div className="mt-5">
                <div className="mt-5">
                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Prix HT </div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Obligatoire
                          </div>
                        </div>
                      </div>
                    </FormLabel>

                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="prix_HT"
                        name="prix_HT"
                        //onChange={onChangeInputPrx_HT}
                        type="text"
                        placeholder="Prix HT"
                        step="any"
                        //value={produit?.prix_HT}
                      />
                      {ValidePrix && (
                        <FormHelp className="text-right text-danger">
                          champ obligatoire
                        </FormHelp>
                      )}
                    </div>
                  </FormInline>
                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Pourcentage de Remise %
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="sku"
                        type="number"
                        placeholder="Remise"
                        name="remise"
                        //value={produit?.remise}
                        //onChange={onChangeInput}
                      />
                      {valideRemise && (
                        <FormHelp className="text-right text-danger">
                          champ obligatoire
                        </FormHelp>
                      )}
                    </div>
                  </FormInline>
                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Prix HT Aprés Remise
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="sku"
                        type="number"
                        name="prix_apre_remise"
                        value={Prixremise.toFixed(3)}
                        disabled
                      />
                    </div>
                  </FormInline>
                  {/*             TVA                   */}
                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">TVA</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Obligatoire
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect
                        id="category"
                        //onChange={onChangeSelectTVA}
                        name="tva"
                        //value={produit?.tva}
                      >
                        <option value="">sélectionnez un TVA</option>
                        {Tvas?.map((item: any, i: any) => (
                          <option key={i} value={item?._id}>
                            {item?.nom}
                          </option>
                        ))}
                      </FormSelect>
                      {valideTva && (
                        <FormHelp className="text-right text-danger">
                          champ obligatoire
                        </FormHelp>
                      )}
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Prix TTC Distributeur
                          </div>
                        </div>
                      </div>
                    </FormLabel>

                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="product-name"
                        name="prix_TTC"
                        type="text"
                        disabled
                        placeholder="PRix TTC"
                        value={PrixTTC.toFixed(3)}
                      />
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Prix TTC Catalogue </div>
                        </div>
                      </div>
                    </FormLabel>

                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="prix_TCC_catalogue"
                        name="prix_TCC_catalogue"
                        type="text"
                        disabled
                        placeholder="PRix TTC"
                        value={prixTTC_Catalogue.toFixed(3)}
                      />
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <FormLabel className="xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Point de produit</div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="product-stock"
                        type="number"
                        name="point_Produit"
                        //value={produit?.point_Produit}
                        //onChange={onChangeInput}
                        placeholder="point de produit"
                      />
                      {validePoint && (
                        <FormHelp className="text-right text-danger">
                          champ obligatoire
                        </FormHelp>
                      )}
                      <FormHelp className="text-right text-danger"></FormHelp>
                    </div>
                  </FormInline>
                </div>
              </div>
              <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
                <Button
                  variant="secondary"
                  className="w-24"
                  onClick={() => {
                    //navigatetoProduits();
                  }}
                >
                  Annuler
                </Button>
                <Button
                  variant="secondary"
                  className="w-24 ml-3"
                  onClick={() => {
                    SetView1(false);
                    SetView2(false);

                    SetView4(true);
                    SetView5(false);
                  }}
                >
                  Précédent
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-26 ml-2"
                  onClick={(e: any) => {
                    AjouterSubmit(e);
                  }}
                >
                  Ajouter Produit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* END: Wizard Layout */}
    </>
  );
}

export default AjouterStory;
