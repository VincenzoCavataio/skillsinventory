import { Infos } from "../Infos";
import { Address } from "../Address";

export const Wrapper = () => {
  return (
    <>
      <Infos
        information="Full Name"
        personalInformation="Joseph Colombo"
      ></Infos>
      <Infos
        information="E-mail"
        personalInformation="joseph.colombo.96@gmail.com"
      ></Infos>
      <Infos
        information="First Employment Start Date"
        personalInformation="02-05-2016"
      ></Infos>
      <Infos
        information="Actual Employment Start Date"
        personalInformation="04-04-2024"
      ></Infos>
      <Infos
        information="Private Number"
        personalInformation="+39 3453048655"
      ></Infos>
      <Infos
        information="Work Number"
        personalInformation="+39 3453048655"
      ></Infos>
      <Address
        information="Address"
        address={["Gorgonzola", "MI", "Italia", "20064", "Via Bellini", "14"]}
      ></Address>
    </>
  );
};
