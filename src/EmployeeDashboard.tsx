import React from 'react';
import { EmployeeSnippet, EmployeeSnippetPropsType } from './EmployeeSnippet'
import { Snippet, SnippetPropsType } from './Snippet';
import { v1 } from 'uuid';

export type EmployeeDashboardPropsType = {
  workshiftsCount: number
  summaryEarnings: number
  penaltySum: number
  penaltyCount: number
  waitExplanationMisconducts: number
  isCashier: boolean
  summaryShortage: number
}

export function EmployeeDashboard(props: EmployeeDashboardPropsType) {
  let misconductColor: string = props.penaltySum ? "red-snippet" : "blue-snippet"
  const firstSnippets: Array<EmployeeSnippetPropsType> = [
    { id: v1(), color: "blue-snippet", title: "Мои смены", icon: "calendar-check", link: "/employee_workshifts", indicatorValue: props.workshiftsCount },
    { id: v1(), color: "blue-snippet", title: "Мой заработок", icon: "ruble-sign", link: "", indicatorValue: props.summaryEarnings },
    { id: v1(), color: misconductColor, title: "Штрафы", icon: "sack-xmark", link: "/my_misconducts", indicatorValue: props.penaltySum }
  ]
  const cashierBlock: EmployeeSnippetPropsType = { id: v1(), color: "red-snippet", title: "Недостачи", icon: "coins", link: "", indicatorValue: props.summaryShortage }
  const secondSnippets: Array<SnippetPropsType> = [
    { id: v1(), color: "red-snippet", title: "Нарушения", icon: "graduation-cap", link: "/my_misconducts", dataCount: props.waitExplanationMisconducts },
    { id: v1(), color: "blue-snippet", title: "Документы", icon: "book", link: "/documents", dataCount: 0 },
    { id: v1(), color: "green-snippet", title: "Графики", icon: "calendar-days", link: "/calendar", dataCount: 0 }
  ]
  return (
    <div className="row m-3">
      <div className="col">
        <div className="row row-cols-md-4 row-cols-sm-1 justify-content-center">
          {firstSnippets.map(snippetData => (
            <div className="col-sm-12 col-md-3 mb-1" key={snippetData.id}>
              <EmployeeSnippet  id={snippetData.id}
                        color={snippetData.color}
                        title={snippetData.title}
                        icon={snippetData.icon}
                        link={snippetData.link}
                        indicatorValue={snippetData.indicatorValue}
              />
            </div>
          ))}
          { props.isCashier && props.summaryShortage && 
            <div className="col-sm-12 col-md-3 mb-1" key={cashierBlock.id}>
              <EmployeeSnippet  id={cashierBlock.id}
                                color={cashierBlock.color}
                                title={cashierBlock.title}
                                icon={cashierBlock.icon}
                                link={cashierBlock.link}
                                indicatorValue={cashierBlock.indicatorValue}
              />
            </div>
          }
          <hr className="w-100 mt-2" />
        </div>
        <div className="row row-cols-md-3 row-cols-sm-1 justify-content-center">
          {secondSnippets.map(snippetData => (
            <div className="col-sm-12 col-md-4 mb-1" key={snippetData.id}>
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
