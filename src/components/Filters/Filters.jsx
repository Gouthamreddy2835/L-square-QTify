import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Filters.module.css";

const Filters = ({ filters, selectedFilterIndex, setSelectedFilterIndex }) => {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div className={styles.filterWrapper}>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary, #34c94b)",
            height: "4px",
            borderRadius: "4px",
          },
        }}
      >
        {filters.map((filter, index) => (
          <Tab
            key={filter.key}
            label={filter.label}
            className={
              selectedFilterIndex === index ? styles.activeTab : styles.tab
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Filters;