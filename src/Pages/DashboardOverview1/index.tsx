import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import Litepicker from "../../base-components/Litepicker";
import ReportDonutChart from "../../components/ReportDonutChart";
import ReportLineChart from "../../components/ReportLineChart";
import ReportPieChart from "../../components/ReportPieChart";
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import SimpleLineChart1 from "../../components/SimpleLineChart1";
import LeafletMap from "../../components/LeafletMap";
import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState<string>();
  const importantNotesRef = useRef<TinySliderElement>();

  return (
    <div className="grid gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                General Report
              </h2>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Reload
                Data
              </a>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <Lucide
                        icon="ShoppingCart"
                        className="w-[28px] h-[28px] text-primary"
                      />
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                          content="33% Higher than last month"
                        >
                          33%
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      4.710
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Item Sales
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <Lucide
                        icon="CreditCard"
                        className="w-[28px] h-[28px] text-pending"
                      />
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                          content="2% Lower than last month"
                        >
                          2%
                          <Lucide
                            icon="ChevronDown"
                            className="w-4 h-4 ml-0.5"
                          />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      3.721
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      New Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <Lucide
                        icon="Monitor"
                        className="w-[28px] h-[28px] text-warning"
                      />
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                          content="12% Higher than last month"
                        >
                          12%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      2.149
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Total Products
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <Lucide
                        icon="User"
                        className="w-[28px] h-[28px] text-success"
                      />
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                          content="22% Higher than last month"
                        >
                          22%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      152.040
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Unique Visitor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 mt-8 lg:col-span-6">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Sales Report
              </h2>
            </div>
            <div className="p-5 mt-12 intro-y box sm:mt-5">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex">
                  <div>
                    <div className="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                      $15,000
                    </div>
                    <div className="mt-0.5 text-slate-500">This Month</div>
                  </div>
                  <div className="w-px h-12 mx-4 border border-r border-dashed border-slate-200 dark:border-darkmode-300 xl:mx-5"></div>
                  <div>
                    <div className="text-lg font-medium text-slate-500 xl:text-xl">
                      $10,000
                    </div>
                    <div className="mt-0.5 text-slate-500">Last Month</div>
                  </div>
                </div>
              </div>
              <div
                className={clsx([
                  "relative",
                  "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                  "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                ])}
              >
                <ReportLineChart height={275} className="mt-6 -mb-6" />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Weekly Top Seller */}
          <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Weekly Top Seller
              </h2>
            </div>
            <div className="p-5 mt-5 intro-y box">
              <div className="mt-3">
                <ReportPieChart height={213} />
              </div>
              <div className="mx-auto mt-8 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Weekly Top Seller */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Sales Report
              </h2>
            </div>
            <div className="p-5 mt-5 intro-y box">
              <div className="mt-3">
                <ReportDonutChart height={213} />
              </div>
              <div className="mx-auto mt-8 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
        </div>
      </div>
    </div>
  );
}

export default Main;
