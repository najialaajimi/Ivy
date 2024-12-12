import React, { Fragment} from "react";
import { Card, CardBody, Container, Form } from "reactstrap";

import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

import FormLabel from "../../base-components/Form/FormLabel/index";
import { FormInline,FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";
import MarkdownIt from "markdown-it";

import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt();
function UpdatePageWeb() {
 

  return (

      <Fragment>
        <div className="flex items-center mt-8 mb-3">
          <h2 className="mr-auto text-lg font-medium intro-y">Modifier Page</h2>
        </div>
        <Container fluid={true}>
          <Card>
            <CardBody>
              {/* <TabsetPage /> */}

              <Fragment>
                <div className="box">
                  <Tabs>
                    <TabList className="nav nav-tabs tab-coupon flex  p-3">
                      <Tab className="mr-auto text-lg font-medium intro-x">
                        Général
                      </Tab>
                    </TabList>
                    <hr className="flex mr-3 ml-3" />

                    <TabPanel>
                      <Form className="needs-validation p-5">
                        <FormInline className="flex-col items-start pt-1 mt-1 xl:flex-row first:mt-0 first:pt-0">
                          <FormLabel className="xl:w-64 xl:!mr-10">
                            <div className="text-left">
                              <div className="flex items-center">
                                <div className="font-medium">Titre</div>
                                <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                  Obligatoire
                                </div>
                              </div>
                            </div>
                          </FormLabel>

                          <div className="flex-1 w-full mt-0 xl:mt-0">
                            <FormInput
                              id="title"
                              name="title"
                              /* value={page?.title.substring(2)}
                              onChange={onChangeInput} */
                              disabled
                              type="text"
                              placeholder="Titre de page "
                            />
                          </div>
                        </FormInline>

                        <FormInline className="flex-col items-start pt-1 mt-1 xl:flex-row first:mt-0 first:pt-0">
                          <FormLabel className="xl:w-64 xl:!mr-10">
                            <div className="text-left">
                              <div className="flex items-center">
                                <div className="font-medium">Description</div>
                                <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                  Obligatoire
                                </div>
                              </div>
                            </div>
                          </FormLabel>

                          <div className="flex-1 w-full mt-0 xl:mt-0">
                            <MdEditor
                              //value={page?.description}
                              style={{ height: "500px" }}
                              renderHTML={(text) => mdParser.render(text)}
                              //onChange={handleEditorChange}
                            />
                          </div>
                        </FormInline>

                      </Form>
                    </TabPanel>
                  </Tabs>
                  <div className="flex items-center col-span-12 intro-y xl:justify-end  xl:mt-3 ">
                    <Button
                      variant="secondary"
                      className="w-24"
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      className="xl:mb-3 sm:mb-3 w-26 mr-2 ml-3 "
                      /* onClick={() => {
                        UpadatePage(id);
                      }} */
                    >
                      Modifier Page
                    </Button>
                  </div>
                </div>
              </Fragment>
            </CardBody>
          </Card>
        </Container>
      </Fragment>

  );
}

export default UpdatePageWeb;
