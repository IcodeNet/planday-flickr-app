import uuid from 'uuid/v4';

const uuidConst = uuid();

export const STRING = 'STRING';
export const NUMBER = 5;
export const OBJECT = { a: 'b', c: 5 };
export const OBJECT_WITH_ID = { id: uuid() };
export const OBJECT_ARRAY = [{ a: 'b' }, { c: 'd' }];
export const EMPTY_ARRAY = [];
export const BOOLEAN = false;
export const ID = () => {
  return uuidConst;
};

export const ID_NEW = () => {
  return uuid();
}
export const CHANGE_EVENT_PAYLOAD = { target: { value: '' } };
