import React from "react";
import './Snippet.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type EmployeeSnippetPropsType = {
  id: string
  color: string
  title: string
  icon: IconName
  link: string
  indicatorValue: number
}

export function EmployeeSnippet(snippetData: EmployeeSnippetPropsType) {
  return (
    <div className={"card h-100 " + (snippetData.color)} key={snippetData.id}>
      <div className="row g-0">
        <div className={"col-md-2 d-flex align-items-center justify-content-center rounded " + (snippetData.color)}>
          <span className="m-2"><FontAwesomeIcon icon={snippetData.icon} size="xl" /></span>
        </div>
        <div className="col m-1">
          <div className="text-center">
            <p className="card-text fst-italic normalize" style={{fontSize: "1rem"}}>
              {snippetData.title}
            </p>
            <hr className="m-1" />
            <span className="fw-bold normalize">{snippetData.indicatorValue}</span>
            <a href={snippetData.link} className="stretched-link"> </a>
          </div>
        </div>
      </div>
    </div>
  );
}
