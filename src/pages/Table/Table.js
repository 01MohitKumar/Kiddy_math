import Heading from "../../ui/Heading/Heading";
import SvgImage from "../../ui/SvgImage/SvgImage";
import styles from "./Table.module.css";
import TableSvg from "../../Store/SVG/mathSvg.svg";
import Input from "../../ui/Input/Input";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import { useState } from "react";

const Table = () => {
  const [entereNumber, setEnteredNumber] = useState("");
  const [tableCreater, setTableCreater] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const numberInputHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const tabletoggleHandler = () => {
    setShowTable(!showTable);
    setEnteredNumber("");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (entereNumber) {
      let arr = [];
      for (let num = 1; num <= 10; num++) {
        arr.push(`${entereNumber} X ${num} = ${num * entereNumber}`);
      }
      setTableCreater(arr);
      setShowTable(!showTable);
    }
  };

  return (
    <>
      <Heading>Table is coming soon...</Heading>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <SvgImage src={TableSvg} alt="table_image" />
        </div>
        <div className={styles.flexChild}>
          <Card>
            <form onSubmit={formSubmitHandler}>
              {!showTable && (
                <>
                  <Input
                    placeholder="Enter number"
                    onChange={numberInputHandler}
                    value={entereNumber}
                  />
                  <Button type="submit">Get Table</Button>
                </>
              )}
              {showTable && (
                <>
                  <div className={styles.tableCard}>
                    <Heading>Table of {entereNumber}</Heading>
                    <div>
                      {showTable &&
                        tableCreater.map((elem) => {
                          return <p className={styles.tableLine} key={elem}>{elem}</p>;
                        })}
                    </div>
                  </div>
                  <Button onClick={tabletoggleHandler}>Clear Table</Button>
                </>
              )}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Table;
