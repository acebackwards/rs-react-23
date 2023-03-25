import React, { Component, createRef, RefObject } from 'react';
import s from './style.module.css';
import { Button } from '../../shared/ui';

type ItemType = {
  title: string;
  date: string;
  type: string;
  author: string;
  sex: string;
  file: number;
};

export class FormPage extends Component<Record<string, never>> {
  formList: ItemType[] = [];
  titleField: RefObject<HTMLInputElement> = createRef();
  dataField: RefObject<HTMLInputElement> = createRef();
  typeField: RefObject<HTMLOptionElement> = createRef();
  authorField: RefObject<HTMLInputElement> = createRef();
  sexField: RefObject<HTMLInputElement> = createRef();
  fileFiled: RefObject<HTMLInputElement> = createRef();

  sendData = (e: React.FormEvent) => {
    e.preventDefault();
    const title = this.titleField.current?.value || '';
    const date = this.dataField.current?.value || '';
    const type = this.typeField.current?.value || '';
    const author = this.authorField.current?.value || '';
    const sex = this.sexField.current?.value || '';
    const file = this.fileFiled.current?.files?.length || 0;
    this.formList.push({ title, date, type, author, sex, file });
    console.log(this.formList);
  };

  render() {
    return (
      <div className={s.container}>
        <form className={s.form} onSubmit={this.sendData}>
          <h3>Input your meme title</h3>
          <input
            type="text"
            name="title"
            ref={this.titleField}
            // onChange={() => console.log(this.titletField.current?.value)}
          />

          <label>Creation date</label>
          <input
            type="date"
            name="date"
            ref={this.dataField}
            // onChange={() => console.log(this.dataField.current?.value)}
          />

          <label>Choose type</label>
          <select name="type">
            <option value="1" ref={this.typeField}>
              Funny
            </option>
            <option value="2" ref={this.typeField}>
              Smart
            </option>
            <option value="3" ref={this.typeField}>
              Science
            </option>
            <option value="4" ref={this.typeField}>
              IT
            </option>
          </select>

          <div className={s.author}>
            <label>Show the author name? </label>
            <input
              type="checkbox"
              name="authorName"
              ref={this.authorField}
              // onChange={() => console.log(this.authorField.current?.checked)}
            />
          </div>
          <label>Choose your sex</label>
          <p className={s.radioBlock}>
            <div>
              <input type="radio" name="userSex" value="sm" ref={this.sexField} />
              Male
            </div>
            <div>
              <input type="radio" name="userSex" value="sf" ref={this.sexField} />
              Female
            </div>
          </p>
          <input type="file" name="meme" className={s.file} ref={this.fileFiled} />
          <Button type="submit" title="Submit" className={s.submit} />
        </form>
      </div>
    );
  }
}
