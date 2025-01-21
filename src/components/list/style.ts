// import { Theme } from "core/src/ui/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  // ({}: Theme) => ({
  ({}) => ({
    listContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      width: "100%",
      border: "1px solid #DEDEDE",
      borderRadius: 20,
      padding: 8,
      gap: 8,
    },
    itemContainer: {
      display: "flex",
      alignItems: "center",
      direction: "rtl",
      justifyContent: "space-between",
      paddingInline: 10,
      height: 60,
      backgroundColor: "red",
      borderRadius: 16,
      backgroundImage:
        "linear-gradient(to right, #E0EAFC 0%, #CFDEF3  51%, #E0EAFC  100%)",
    },
  }),
);
