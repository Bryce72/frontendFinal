import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import React, { useState } from "react";
import StopCheckmark from "./StopCheckmark";
import ModuleEditor from "./ModuleEditor";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as client from "./client";


export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [modules, setModules] = useState<any[]>([]);


  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="wd-top-content-offset p-3">
      {currentUser.role === "FACULTY" && (
        <div id="wd-modules-controls" className="text-nowrap d-flex">

          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
            data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
            <FaPlus className=" me-2 " style={{ bottom: "1px" }} />
            Module</button>

          <div className="dropdown d-inline me-1 float-end">

            <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
              type="button" data-bs-toggle="dropdown">
              <GreenCheckmark />
              Publish All</button>

            <ul className="dropdown-menu">
              <li>
                <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                  <GreenCheckmark />
                  Publish all modules and items</a>
              </li>
              <li>
                <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                  <GreenCheckmark />
                  Publish modules only</a>
              </li>
              {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
              <li>
                <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                  <StopCheckmark />
                  Unpublish all modules and items</a>
              </li>
              <li>
                <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                  <StopCheckmark />
                  Unpublish modules only</a>
              </li>
            </ul>
          </div>

          {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
          <button id="wd-view-progress" className="btn btn-lg btn-secondary float-end me-1"
            type="button">
            View Progress</button>


          <button id="wd-collapse-all" className="btn btn-lg btn-secondary float-end me-1"
            type="button">
            Collapse All</button>

          <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
            setModuleName={setModuleName} addModule={addModule} />

        </div>)}
    </div>

  );
}

