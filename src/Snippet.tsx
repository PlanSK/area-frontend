import React from "react";
import './Snippet.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type SnippetPropsType = {
  id: string
  color: string
  title: string
  icon: IconName
  link: string
  dataCount: number
}

export function Snippet(snippetData: SnippetPropsType) {
  return (
      <div className={"card h-100 " + (snippetData.color)} key={snippetData.id}>
        <div className="card-body ">
          <p className="card-text fst-italic normalize" style={{fontSize: "1rem"}}>
              <span className="me-2"><FontAwesomeIcon icon={snippetData.icon} size="xl" /></span>
              {snippetData.title}
          </p>
          <a href={snippetData.link} className="stretched-link"> </a>
        </div>
        {snippetData.dataCount > 0 && <div className="card-footer d-flex justify-content-between align-items-center">
          <span className="card-text"><b><i>Ожидает действие:</i></b></span><span className="badge bg-warning text-dark">{snippetData.dataCount}</span>
        </div>
        }
      </div>
  );
}
