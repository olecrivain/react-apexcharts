/// <reference types="react"/>
import { ApexOptions } from 'apexcharts'
import React from "react";
/**
 * Basic type definitions from https://apexcharts.com/docs/react-charts/#props
 */
declare module "react-apexcharts" {
  interface Props {
    type?: "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar",
    series?: ApexOptions['series'],
    width?: string | number,
    height?: string | number,
    options?: ApexOptions,
    [key: string]: any,
  }
  export default class ReactApexChart extends React.Component<Props> {}    
}
