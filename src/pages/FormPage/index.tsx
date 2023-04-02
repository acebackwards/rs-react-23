import React, { useState } from 'react';
import s from './style.module.css';
import { Button } from '../../shared/ui';
import { FormCard } from '../../entities/ui';
import { SubmitHandler, useForm } from 'react-hook-form';

type ItemType = {
  title: string;
  date: string;
  type: string;
  developer: boolean;
  gender: string;
  file: string;
};

interface IForm {
  title: string;
  date: string;
  type: string;
  developer: boolean;
  gender: string;
  file: FileList;
}

interface IFormCard {
  title: string;
  date: string;
  type: string;
  developer: boolean;
  gender: string;
  file: string;
}

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const [formList, setFormList] = useState<ItemType[]>([]);

  const onSubmit: SubmitHandler<IForm> = ({
    title,
    date,
    type,
    developer,
    gender,
    file,
  }: IForm) => {
    const newFormCard: IFormCard = {
      title,
      date,
      type,
      developer,
      gender,
      file: window.URL.createObjectURL(file[0]),
    };

    setFormList([...formList, newFormCard]);

    reset();
  };

  return (
    <div className={s.formPage}>
      <div className={s.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Meme title</label>
          <input
            placeholder="Type something..."
            {...register('title', {
              required: true,
            })}
          />
          {errors.title && <span>You have to fill this field...</span>}

          <label htmlFor="date">Creation date</label>
          <input
            type="date"
            {...register('date', {
              required: true,
            })}
          />
          {errors.date && <span>You have to fill this field...</span>}

          <label>Meme type</label>
          <select {...register('type')}>
            <option value="1">Funny</option>
            <option value="2">Smart</option>
            <option value="3">Science</option>
            <option value="4">IT</option>
          </select>

          <label>Is developer?</label>
          <input type="checkbox" {...register('developer')} />

          <label>Sex</label>
          <div>
            <input
              type="radio"
              value="male"
              {...register('gender', {
                required: true,
              })}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              value="female"
              {...register('gender', {
                required: true,
              })}
            />
            Female
          </div>
          {errors.gender && <span>You have to choose...</span>}

          <input
            type="file"
            accept="image/*"
            className={s.file}
            {...register('file', {
              required: true,
            })}
          />
          {errors.file && <span>You have to upload an image...</span>}

          <Button type="submit" title="Submit" className={s.submit} />
        </form>
      </div>

      <div className={s.cardContainer}>
        {formList.map((item, index) => {
          return (
            <FormCard
              key={index}
              title={item.title}
              date={item.date}
              type={item.type}
              gender={item.gender}
              img={item.file}
              author={item.developer}
            />
          );
        })}
      </div>
    </div>
  );
};
