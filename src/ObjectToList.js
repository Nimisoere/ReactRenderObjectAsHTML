import React from "react";

const ObjectToList = ({ items, index }) => {
  return (
    <ul>
      {typeof items === "object" ? (
        Object.keys(items).map(key => {
          return (
            <li key={key + index ? index : ""}>
              <span>
                <strong>{key}</strong> :{" "}
                {typeof items[key] !== "object" ? (
                  items[key].toString()
                ) : (
                  <div className="sub">
                    <RenderObjects objectToConv={items[key]} />
                  </div>
                )}
              </span>
            </li>
          );
        })
      ) : (
        <li />
      )}
    </ul>
  );
};

const RenderObjects = ({ objectToConv }) => {
  return (
    <div className="App">
      {objectToConv && typeof objectToConv === "object" ? (
        objectToConv.isArray && objectToConv.length ? (
          objectToConv.map((items, index) => (
            <ObjectToList key={index} items={items} index={index} />
          ))
        ) : (
          <ObjectToList items={objectToConv} />
        )
      ) : (
        <p>{objectToConv.toString()}</p>
      )}
    </div>
  );
};

export default RenderObjects;
