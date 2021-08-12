import {atom} from 'recoil';

export const images = atom({
  key: "images",
  default: [],
})

export const showModal = atom({
  key: "showModal",
  default: false,
})

export const popupImage = atom({
  key: "popupImage",
  default: {},
})

export const popupIndex = atom({
  key: "popupIndex",
  default: 0,
})