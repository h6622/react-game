import React from "react";

const WordsRelay = () => {
  const [word, setWord] = React.useState("가나다");
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult("딩동댕");
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordsRelay;
