import React from "react";
import { Chart } from "react-google-charts";

const BarChart = () => {
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Year", "Wins"],
          ["2008", 7],
          ["2009", 10],
          ["2010", 9],
          ["2011", 11],
          ["2012", 12],
          ["2013", 14],
          ["2014", 15],
          ["2015", 17],
          ["2016", 10],
          ["2017", 17],
          ["2018", 14],
          ["2019", 9]
          [("2020", 16)],
        ]}
        options={{
          // Material design options
          chart: {
            title: "Team Performance",
            subtitle: "Wins: 2008-2020",
            bar: { groupWidth: "50%" },
          },
          colors: ["#FB7A21"],
          backgroundColor: "#212121",
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default BarChart;
