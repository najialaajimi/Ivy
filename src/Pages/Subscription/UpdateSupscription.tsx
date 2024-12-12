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

function UpdateSupscription() {
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
                  Modification Packs
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
          Modifer Pack
        </h2>
      </div>

      <div className="py-10 mt-5 intro-y box sm:py-1">
        <div className="p-5 mt-5 intro-y box">
          <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
              Modifier Packs
            </div>
            <div className="mt-5">

              <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Nom de Packs</div>
                    </div>
                  </div>
                </FormLabel>

                <div className="flex-1 w-full mt-2 xl:mt-0">
                <FormInput
                    name="name_pack"
                    type="text"
                    placeholder="Argent"
                  />

                    
                  </div>
              </FormInline>

              <FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
                <FormLabel className="xl:w-64 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Nombre Story
                      </div>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
                  </div>
                </FormLabel>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    name="point"
                    type="number"
                    min={10}
                    max={30000}
                    // onChange={onChangeInputArea}
                    placeholder="10"
                  />
                </div>
              </FormInline>

<FormInline className="flex-col items-start pt-3 xl:flex-row first:mt-0 first:pt-0">
  <FormLabel className="xl:w-64 xl:!mr-10">
    <div className="text-left">
      <div className="flex items-center">
        <div className="font-medium">
          Prix Pack TTC
        </div>
      </div>
      <div className="mt-3 text-xs leading-relaxed text-slate-500"></div>
    </div>
  </FormLabel>
  <div className="flex-1 w-full mt-3 xl:mt-0">
    <InputGroup className=" mr-2">
      <FormInput
        type="number"
        name="price_ht"
        placeholder="80"
        aria-describedby="input-group-2"
      />
      <InputGroup.Text id="input-group-2">DT</InputGroup.Text>
    </InputGroup>
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

export default UpdateSupscription;