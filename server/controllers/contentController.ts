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

const updateContent = async (data: any) => {
  await Contents.findOneAndUpdate(data.path, { text: data.text });
  return;
};

export {
  getContent,
  updateContent
}