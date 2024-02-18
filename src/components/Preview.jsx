import { Outlet, useParams } from "react-router-dom";
import Test from "../test/Test";
import axios from "axios";
import { useState } from "react";

export default function Preview() {
  const [data, setData] = useState(null);

  axios
    .get("http://127.0.0.1:8000/nav")
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {});
  const { projctid } = useParams();
  localStorage.setItem("open", projctid);
  return (
    <>
      <div className="row">
        <div className="col">
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </>
  );
}
