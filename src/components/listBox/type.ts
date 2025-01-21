import { createFormContext } from "react-hook-form-context";

export interface ActivityFormType {
  title: string;
  isEditMode: boolean;
}

export const ActivityForm = createFormContext<ActivityFormType>({
  title: "",
  isEditMode: false,
});
