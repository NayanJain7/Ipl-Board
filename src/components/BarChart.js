import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useParams } from "react-router";

const BarChart = () => {
  const [teamWinYear, setTeamWinYear] = useState([]);

  const { teamName } = useParams();

  useEffect(() => {
    const fetchWinsWithYear = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DATA_API_URL}/team/all-wins/${teamName}`
      );

      const data = await response.json();
      setTeamWinYear(data);
    };

    fetchWinsWithYear();
  }, [teamName]);

  const items = [["Year", "Wins"]];

  for (let key in teamWinYear) {
    items.push([`${key}`, teamWinYear[key]]);
  }

  return (
    <>
      <Chart
        width={"600px"}
        height={"320px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={items}
        options={{
          subtitle: "Matches, Wins: 2008-2020",

          title: `Team Performance
                        Matches, Wins: 2008-2020`,

          animation: {
            duration: 1000,
            easing: "out",
            startup: true,
            statusbar: true,
          },

          bar: { groupWidth: "90%" },
        }}
        // For tests
        rootProps={{ "data-testid": "3" }}
      />
    </>
  );
};
export default BarChart;
