import { React } from "react";
import { Chart } from "react-google-charts";

export const PieChart = ({ team }) => {
  return (
    <>
      <Chart
        width={"400px"}
        height={"300px"}
        chartType="PieChart"
        fill="red"
        loader={<div>Loading Chart</div>}
        data={[
          ["Teams", "Win Lose "],
          ["Losses", team.totalMatch - team.totalWins],
          ["Wins", team.totalWins],
        ]}
        options={{
          legend: "none",
          pieSliceText: "label",
          title: "Wins / Looses",
          backgroundColor: "#212121",
          pieStartAngle: 100,
          titleTextStyle: { color: "#FFF" },
          slices: {
            0: { color: "#dc3912" },
            1: { color: "#009688" },
          },
        }}
        rootProps={{ "data-testid": "4" }}
      />
    </>
  );
};
