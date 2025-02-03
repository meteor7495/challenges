import * as Yup from 'yup';
import { titleInPersian } from '../../../constants';

export const fields =[
  { name: "title", label: "عنوان تسک", type: "text", col:8},
  { name: "description", label: "توضیحات", type: "textarea", col:8 },
]

export const taskSchema = Yup.object({
  title: Yup.string()
    .matches(titleInPersian, "عنوان باید فقط شامل حروف فارسی باشد")
    .min(1, "عنوان وظیفه الزامی است")
    .required("عنوان وظیفه الزامی است"),
  description: Yup.string().optional(),
});