import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import {
  FormInline,
  FormInput,
  FormLabel,
  FormSelect,
  InputGroup,
} from "../../base-components/Form";
// Plugins
import {
  Preview,
} from "../../base-components/PreviewComponent";

import { Dialog } from "../../base-components/Headless";

import {  useState } from "react";

function UpdateOrderStory() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div className="col-span-12 lg:col-span-9 2xl:col-span-12">
          <div>
        <Preview>
          {/* BEGIN: Modal Content */}
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <Dialog.Panel className="my-[10%] mx-auto">
              <Dialog.Title>
                <h2 className="mr-auto text-base font-medium">
                  Modification Commande
                </h2>
              </Dialog.Title>
              <Dialog.Description className="grid grid-cols-1 gap-4 gap-y-3">
                <div className="p-2 border rounded-md border-slate-200/60 dark:border-darkmode-400 ">
                  <div className="flex items-center pb-1 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Vous êtes
                    sûr de modifier ...!
                  </div>
    
                </div>
              </Dialog.Description>
              <Dialog.Footer>
                <Button
                variant="secondary"
                className="w-24"
                onClick={handleClose}
              >
                Annuler
              </Button>

              <Button
                variant="primary"
                className="w-24 ml-2"
                
              >
                Modifier
              </Button>
              </Dialog.Footer>
            </Dialog.Panel>
          </Dialog>
          {/* END: Modal Content */}
        </Preview>
      </div>
      <div className="flex items-center mt-8">
        <h2 className="mr-auto text-lg font-medium intro-y">
          Modifer Commande
        </h2>
      </div>

      <div className="py-10 mt-5 intro-y box sm:py-1">
        <div className="p-5 mt-5 intro-y box">
          <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
              Modifier Commande
            </div>
            <div className="mt-5">
              
            <div className="text-center items-center space-between">
                <FormLabel className="text-lg font-medium">
                  <InputGroup className="e-3 mr-2">
                    <FormInput
                      type="text"
                      placeholder="Reference "
                      className="w-22"
                      aria-describedby="input-group-2"
                      disabled
                    />
                  </InputGroup>
                </FormLabel>
              </div>

              <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Nom de Pro</div>
                    </div>
                  </div>
                </FormLabel>

                <div className="flex-1 w-full mt-2 xl:mt-0">
                <FormInput
                    name="name"
                    type="text"
                    placeholder="Nom Pro"
                    disabled
                  />
                  </div>
              </FormInline>
              <FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Prénom Pro</div>
                    </div>
                  </div>
                </FormLabel>

                <div className="flex-1 w-full mt-2 xl:mt-0">
                <FormInput
                    name="lastname"
                    type="text"
                    placeholder="Prénom Pro"
                    disabled
                  />
                  </div>
              </FormInline>

              <FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Nom de Models
                      </div>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                  </div>
                </FormLabel>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    name="name_model"
                    type="text"
                    placeholder="Nom de Models"
                    disabled
                  />
                </div>
              </FormInline>

              <FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Nom client
                      </div>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                  </div>
                </FormLabel>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    name="name_client"
                    type="text"
                    placeholder="Nom Client"
                  />
                </div>
              </FormInline>

              <FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Prenom client
                      </div>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                  </div>
                </FormLabel>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    name="lastname_client"
                    type="text"
                    placeholder="Prenom Client"
                  />
                </div>
              </FormInline>

            </div>
            <div className="flex items-center justify-between col-span-12 mt-5 intro-y sm:justify-end">
              <Button
                variant="secondary"
                className="w-24"
              >
                Annuler
              </Button>

              <Button
                variant="primary"
                type="submit"
                className="w-24 ml-2"
                
                onClick={() => {
                  setOpen(true);
                }}
              >
                Modifier
              </Button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default UpdateOrderStory;