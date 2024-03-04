const getLocal = (name: string) => {
  if (typeof window !== "undefined") {
    if (localStorage === undefined || !localStorage) {
      return;
    }

    const lsValue = localStorage.getItem(name);
    if (!lsValue) {
      return;
    }
    try {
      const data = JSON.parse(lsValue);
      if (data) {
        return data;
      }
    } catch (error) {
      console.error("LOCAL STORAGE PARSE ERROR", error);
    }
  }
};

const setLocal = (name: string, data: any) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = JSON.stringify(data);
    localStorage.setItem(name, lsValue);
  } catch (error) {
    console.error("LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeLocal = (name: string) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(name);
  } catch (error) {
    console.error("LOCAL STORAGE REMOVE ERROR", error);
  }
};

export { getLocal, removeLocal, setLocal };
