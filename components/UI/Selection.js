import Select from "react-select";
import { useTranslation } from 'react-i18next';
const Selection = (props) => {
  const [ t, i18n ] = useTranslation();
  const options = [
    { value: t("Cairo"), label: t("Cairo") },
    { value: "Giza", label: "Alex" },
    { value: "Cairo", label: "Giza" },
  ];
  return <Select options={options} isClearable={true} />;
};

export default Selection;
