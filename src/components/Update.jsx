import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <h3>update infomation of {loaderData.name}</h3>
      <form>
        <input type="text" name="text" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Update;
