import React from 'react';
import { SnippetPropsType, Snippet } from './Snippet'
import { v1 } from 'uuid';

export type StaffDashboardPropsType = {
  unverifiedWorkshifts: number
  inactiveUsers: number
  waitExplanationMisconducts: number
  waitDecisionMisconducts: number
}

export function StaffDashboard(props: StaffDashboardPropsType) {
  const firstSnippets: Array<SnippetPropsType> = [
    { id: v1(), color: "blue-snippet", title: "Смены", icon: "calendar-check", link: "/workshifts", dataCount: props.unverifiedWorkshifts },
    { id: v1(), color: "green-snippet", title: "Сотрудники", icon: "users", link: "/users", dataCount: props.inactiveUsers },
    { id: v1(), color: "red-snippet", title: "Нарушения", icon: "graduation-cap", link: "/misconducts", dataCount: props.waitExplanationMisconducts }
  ]
  const secondSnippets: Array<SnippetPropsType> = [
    { id: v1(), color: "blue-snippet", title: "Аналитика", icon: "chart-line", link: "/analytic", dataCount: 0 },
    { id: v1(), color: "green-snippet", title: "Графики", icon: "calendar-days", link: "/graphics", dataCount: 0 },
    { id: v1(), color: "orange-snippet", title: "Отчеты", icon: "chart-column", link: "/reports", dataCount: 0 }
  ]
  return (
    <div className="row m-3">
      <div className="col">
        <div className="row row-cols-md-3 row-cols-sm-1 justify-content-center">
          {firstSnippets.map(snippetData => (
            <div className="col-sm-12 col-md-3 mb-1" key={snippetData.id}>
              <Snippet  id={snippetData.id}
                        color={snippetData.color}
                        title={snippetData.title}
                        icon={snippetData.icon}
                        link={snippetData.link}
                        dataCount={snippetData.dataCount}
              />
            </div>
          ))}
        </div>
        <div className="row row-cols-md-3 row-cols-sm-1 justify-content-center">
          {secondSnippets.map(snippetData => (
            <div className="col-sm-12 col-md-3 mb-1" key={snippetData.id}>
              <Snippet  id={snippetData.id}
                        color={snippetData.color}
                        title={snippetData.title}
                        icon={snippetData.icon}
                        link={snippetData.link}
                        dataCount={snippetData.dataCount}
              />
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  )
}
