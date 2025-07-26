import React from "react";

const sectorsList = ["Climate Action", "Coastal", "Law And Justice"];
const timePeriodsList = ["2020-2025", "2015-2020", "2010-2015"];
const dataTypesList = ["CSV", "PDF", "XLSX"];
const geographiesList = ["Himachal Pradesh", "Odisha", "India","Assam"];
const tags = ["Population", "Census", "Maps", "Law"];

const LeftFilters = ({ filters, setFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const arr = Array.isArray(prev[category]) ? prev[category] : [];
      return {
        ...prev,
        [category]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const handleReset = () => {
    setFilters({
      sectors: [],
      timePeriods: [],
      dataTypes: [],
      tags: [],
      geographies: [],
      query: "",
    });
  };

  return (
    <div className="bg-white shadow-[0_3px_10px_rgb(0_0_0_/0.2)] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#1f5f8d] font-bold uppercase text-xl">
          Filters
        </h2>
        <button
          onClick={handleReset}
          className="text-orange-500 font-semibold text-sm cursor-pointer uppercase"
        >
          Reset
        </button>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <strong>Sectors</strong>
        </label>
        <div>
          {sectorsList.map((sector) => (
            <div key={sector} className="mb-1">
              <input
                type="checkbox"
                className="accent-neutral-800"
                checked={Array.isArray(filters.sectors) && filters.sectors.includes(sector)}
                onChange={() => handleCheckboxChange("sectors", sector)}
                id={`sector-${sector}`}
              />
              <label
                htmlFor={`sector-${sector}`}
                className="ml-2 cursor-pointer"
              >
                {sector}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <strong>Time Period</strong>
        </label>
        <div>
          {timePeriodsList.map((period) => (
            <div key={period} className="mb-1">
              <input
                type="checkbox"
                className="accent-neutral-800"
                checked={Array.isArray(filters.timePeriods) && filters.timePeriods.includes(period)}
                onChange={() => handleCheckboxChange("timePeriods", period)}
                id={`time-${period}`}
              />
              <label htmlFor={`time-${period}`} className="ml-2 cursor-pointer">
                {period}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <strong>Data Type</strong>
        </label>
        <div>
          {dataTypesList.map((type) => (
            <div key={type} className="mb-1">
              <input
                type="checkbox"
                className="accent-neutral-800"
                checked={Array.isArray(filters.dataTypes) && filters.dataTypes.includes(type)}
                onChange={() => handleCheckboxChange("dataTypes", type)}
                id={`datatype-${type}`}
              />
              <label
                htmlFor={`datatype-${type}`}
                className="ml-2 cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <strong>Tags</strong>
        </label>
        <div>
          {tags.map((tag) => (
            <div key={tag} className="mb-1">
              <input
                type="checkbox"
                className="accent-neutral-800"
                checked={Array.isArray(filters.tags) && filters.tags.includes(tag)}
                onChange={() => handleCheckboxChange("tags", tag)}
                id={`tag-${tag}`}
              />
              <label htmlFor={`tag-${tag}`} className="ml-2 cursor-pointer">
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <strong>Geography</strong>
        </label>
        <div>
          {geographiesList.map((geo) => (
            <div key={geo}>
              <input
                type="checkbox"
                className="accent-neutral-800"
                checked={Array.isArray(filters.geographies) && filters.geographies.includes(geo)}
                onChange={() => handleCheckboxChange("geographies", geo)}
                id={`geo-${geo}`}
              />
              <label htmlFor={`geo-${geo}`} className="ml-2 cursor-pointer">{geo}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftFilters;