// import { Theme } from "core/src/ui/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  // ({}: Theme) => ({
  ({}) => ({
    errorLabel: {
      direction: "rtl",
      height: 16,
      margin: 0,
      fontSize: 12,
      marginTop: 2,
      color: "red",
    },
  }),
);
