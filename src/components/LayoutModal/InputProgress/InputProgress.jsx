/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";

const InputProgress = ({ register, errors, name }) => {
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
      />
      <S.ErrorMessage>{errors[name]?.message}</S.ErrorMessage>
    </>
  );
};

export default InputProgress;
