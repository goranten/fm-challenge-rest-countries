import { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { AxiosResponse } from "axios";

const Detail: FC = (): ReactElement => {
  const params = useParams<{ name: string }>();
  const queryClient = useQueryClient();
  const name = params.name.replace("-", " ");

  const data = queryClient.getQueryData<AxiosResponse<{ name: string }[]>>(
    "allCountries"
  );

  const country = data?.data.find((c) => c.name.toLowerCase() === name);

  console.log(country);

  return (
    <section>
      <h1>Detail</h1>
      <div>{JSON.stringify(country, null, 2)}</div>
    </section>
  );
};

export default Detail;
