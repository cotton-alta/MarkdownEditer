import express from "express";
import { Contents } from "../models/contents";

const getContent = () => {
  // res.send("ok");
  Contents.find({}, (err: any, result: any) => {
    console.log(result);
  });
  console.log("get content");
};

export {
  getContent
}