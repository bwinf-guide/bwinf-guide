import { Callout } from "nextra/components";
import React, { useEffect } from "react";
import config from "../theme.config";

function Impressum(): React.ReactNode {
  const [impressumData, setImpressumData] = React.useState({
    name: "",
    address: "",
    city: "",
    email: "",
    fax: "",
  });

  useEffect(() => {
    fetch("https://chuyang-wang-dev.github.io/impressum/data.json", {
      method: "GET",
      mode: "cors",
    }).then((res) => {
      res.json().then((data) => {
        setImpressumData(data);
      });
    });
  }, []);

  return (
    <div>
      {/* <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">Impressum</h1> */}
      <p className="mt-3 nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-text-3xl">Angaben gemäß § 5 TMG</p>

      <p>{impressumData.name ?? ""}</p>
      <p>{impressumData.address ?? ""}</p>
      <p>{impressumData.city ?? ""}</p>
      <p className="mt-2"><span>E-Mail: </span>{impressumData.email ?? ""}</p>
      <p><span>Fax: </span>{impressumData.fax ?? ""}</p>
    </div>
  );
}

export default Impressum;
