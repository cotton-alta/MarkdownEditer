import express from "express";
import { Contents } from "../models/contents";

type ResultType = {
  title: string,
  text: string,
  created: string,
  updated: string
}

const getContent = async (editPath: string) => {
  let data: ResultType;
  data = await Contents.findById(editPath);
  return data.text;
};

const updateContent = (text: string) => {

  return;
};

export {
  getContent
}