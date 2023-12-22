import * as S from "./styles";

const InputProgress = ({ register, errors, name, onchange }) => {
  return (
    <>
      <S.Input
        placeholder="Введите значение"
        {...register(`${name}`, {
          required: "Обязательно к заполнению",
          minLength: { value: 1, message: "Минимальная длинна 1" },
          validate: (value) => {
            return [/^\d+$/].every((pattern) => pattern.test(value)) || "Только цифры";
          }
        })}
        onChange={onchange}
      />
      <S.ErrorMessage>{errors[name]?.message}</S.ErrorMessage>
    </>
  );
};

export default InputProgress;
