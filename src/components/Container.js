import React, { useEffect, useState } from "react";
import DropDown from "./dropdown";
import { API_AXIOS } from "./HttpCalls";
import Apis from "./HttpCalls/ApiUrl";
import UserCard from "./UserCard";
const Container = () => {
  const [dropDownValues, setDropValue] = useState([]);
  const [listOfPeople, setListOfPeople] = useState([]);
  const [loadingPlanet, setLoadingPlanet] = useState(false);
  const [loadingListPeople, setLoadingListPeople] = useState(false);

  useEffect(() => {
    getPlanet(1);
  }, []);
  const getPlanet = async (page) => {
    setLoadingPlanet(true);
    const { data } = await API_AXIOS.get(`${Apis.planets}?page=${page}`);

    const newArrayOfObj = data?.results.map(
      ({ name: label, ...rest }, index) => ({
        label,
        value: index,
        ...rest,
      })
    );
    setDropValue(newArrayOfObj);
    setLoadingPlanet(false);
    console.log("data", newArrayOfObj);
  };

  const getAllData = (URLs) => {
    return Promise.all(URLs.map(fetchData));
  };

  const fetchData = (URL) => {
    return API_AXIOS.get(URL)
      .then(function (response) {
        return {
          success: true,
          data: response.data,
        };
      })
      .catch(function (error) {
        return { success: false };
      });
  };

  const onChangeDropDown = (index) => {
    console.log("values", dropDownValues[index].residents);
    setLoadingListPeople(true);
    getAllData(dropDownValues[index].residents)
      .then((resp) => {
        const result = [];
        resp?.map((obj) => {
          result.push(obj?.data);
        });
        setListOfPeople(result);
        setLoadingListPeople(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <DropDown
        dropDownValues={dropDownValues}
        loadingPlanet={loadingPlanet}
        onChangeDropDown={onChangeDropDown}
      ></DropDown>
      <UserCard
        listOfPeople={listOfPeople}
        loadingListPeople={loadingListPeople}
      ></UserCard>
    </div>
  );
};
export default Container;
