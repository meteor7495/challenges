import { createFormContext } from "react-hook-form-context";

export interface ActivityFormType {
  title: string;
  isEditMode: boolean;
  editId: string;
}

export const ActivityForm = createFormContext<ActivityFormType>({
  title: "",
  isEditMode: false,
  editId: "",
});
