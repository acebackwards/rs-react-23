import React, { Component, createRef, RefObject } from 'react';
import s from './style.module.css';
import { Button } from '../../shared/ui';
import { FormCard } from '../../entities/ui';

type ItemType = {
  title: string;
  date: string;
  type: string;
  author: boolean;
  gender: boolean;
  file: string;
};

export class FormPage extends Component<Record<string, never>> {
  formList: ItemType[] = [];
  titleField: RefObject<HTMLInputElement> = createRef();
  dataField: RefObject<HTMLInputElement> = createRef();
  typeField: RefObject<HTMLSelectElement> = createRef();
  authorField: RefObject<HTMLInputElement> = createRef();
  genderMaleField: RefObject<HTMLInputElement> = createRef();
  genderFemaleField: RefObject<HTMLInputElement> = createRef();
  fileField: RefObject<HTMLInputElement> = createRef();

  state: {
    formList: ItemType[];
    titleIsValid: boolean;
    dateIsValid: boolean;
    genderIsValid: boolean;
    fileIsValid: boolean;
  } = {
    formList: [],
    titleIsValid: true,
    dateIsValid: true,
    genderIsValid: true,
    fileIsValid: true,
  };

  validateTitle() {
    return this.titleField.current?.value === '';
  }

  validateDate() {
    return this.dataField.current?.value === '';
  }

  validateGender() {
    return !this.genderMaleField.current?.checked && !this.genderFemaleField.current?.checked;
  }

  validateFile() {
    return this.fileField.current?.files?.length === 0;
  }

  sendData = (e: React.FormEvent | HTMLFormElement) => {
    e.preventDefault();
    const title = (this.titleField.current as HTMLInputElement).value;
    const date = (this.dataField.current as HTMLInputElement).value;
    const type = (this.typeField.current as unknown as HTMLSelectElement).value;
    const author = (this.authorField.current as HTMLInputElement).checked;
    const genderMale = (this.genderMaleField.current as HTMLInputElement).checked;
    const genderFemale = (this.genderFemaleField.current as HTMLInputElement).checked;
    const file = this.fileField.current?.files as FileList;
    if (
      title === '' ||
      date === '' ||
      (genderMale === false && genderFemale === false) ||
      file.length === 0
    ) {
      this.setState(() => {
        return {
          titleIsValid: !this.validateTitle(),
          dateIsValid: !this.validateDate(),
          genderIsValid: !this.validateGender(),
          fileIsValid: !this.validateFile(),
        };
      });
      return;
    }

    this.setState(() => {
      return {
        titleIsValid: this.validateTitle(),
        dateIsValid: this.validateDate(),
        genderIsValid: this.validateGender(),
        fileIsValid: this.validateFile(),
      };
    });

    this.formList.push({
      title,
      date,
      type,
      author,
      gender: genderMale ? true : false,
      file: window.URL.createObjectURL(file[0]),
    });

    this.setState(() => {
      return {
        formList: [
          ...this.formList,
          { title, date, type, author, gender: genderMale ? true : false, file },
        ],
      };
    });
    alert('Card has been added successfully');
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className={s.formPage}>
        <div className={s.container}>
          <form
            className={s.form}
            onSubmit={(e) => {
              this.sendData(e);
            }}
          >
            <h3>Input your meme title</h3>
            <input type="text" name="title" ref={this.titleField} />
            {this.state.titleIsValid || <span>You have to fill this field...</span>}

            <label>Creation date</label>
            <input type="date" name="date" ref={this.dataField} />
            {this.state.dateIsValid || <span>You have to fill this field...</span>}

            <label>Choose type</label>
            <select name="type" ref={this.typeField}>
              <option value="1">Funny</option>
              <option value="2">Smart</option>
              <option value="3">Science</option>
              <option value="4">IT</option>
            </select>

            <div className={s.author}>
              <label>Grant Usage Rights?</label>
              <input type="checkbox" name="authorName" ref={this.authorField} />
            </div>
            <label>Choose your gender</label>
            <p className={s.radioBlock}>
              <div>
                <input type="radio" name="userSex" value="sm" ref={this.genderMaleField} />
                Male
              </div>
              <div>
                <input type="radio" name="userSex" value="sf" ref={this.genderFemaleField} />
                Female
              </div>
            </p>
            {this.state.genderIsValid || <span>You have to choose...</span>}
            <input
              type="file"
              name="meme"
              accept="image/*"
              className={s.file}
              ref={this.fileField}
            />
            {this.state.fileIsValid || <span>You have to upload image...</span>}
            <Button type="submit" title="Submit" className={s.submit} />
          </form>
        </div>

        <div className={s.cardContainer}>
          {this.formList.map((item, index) => {
            return (
              <FormCard
                key={index}
                title={item.title}
                date={item.date}
                type={item.type}
                gender={item.gender}
                img={item.file}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
